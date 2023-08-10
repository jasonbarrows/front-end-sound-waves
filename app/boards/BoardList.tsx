import { useState, useEffect, Dispatch, SetStateAction } from "react";
import BoardCard from "./BoardCard";

import { getBoards } from "../utils/AxiosFunctions";
import { Board } from "../models";
import { BoardSkeleton } from "../Skeletons";

function BoardList() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    getBoards().then((res) => {
      setBoards(res.boards);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="m-4">
      {/* <NewBoardForm /> */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-violet-900">
        All Boards
      </h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {isLoading
          ? skeletonArray.map((num) => {
              return <BoardSkeleton key={num} />;
            })
          : boards.map((board) => (
              <BoardCard key={board.board_slug} board={board} />
            ))}
      </div>
    </main>
  );
}

export default BoardList;
