import { useState, useEffect } from "react";
import BoardCard from "./BoardCard";
// import NewBoardForm from "./NewBoardForm";
import { getBoards } from "../utils/AxiosFunctions";
import { Board } from "../models";

function BoardList() {
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    getBoards().then((res) => {
      setBoards(res.boards);
    });
  }, []);

  return (
    <main className="m-4">
      {/* <NewBoardForm /> */}
      <h1 className="text-2xl sm:text-3xl font-extralight text-violet-900">
        All Boards
      </h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {boards.map((board) => (
          <BoardCard key={board.board_slug} board={board} />
        ))}
      </div>
    </main>
  );
}

export default BoardList;
