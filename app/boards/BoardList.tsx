import { useState, useEffect } from "react";
import BoardCard from "./BoardCard";
// import NewBoardForm from "./NewBoardForm";
import { getBoards } from "../utils/AxiosFunctions";

function BoardList(): React.ReactElement {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoards().then((res) => {
      setBoards(res.boards);
    });
  }, []);

  return (
    <main className="m-4">
         {/* <NewBoardForm /> */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-violet-900">
        All Boards
      </h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {boards.map((board) => (
          <BoardCard key={board.board_slug} board={board} />
        ))}
      </div>
   
    </main>
  );
}

export default BoardList;
