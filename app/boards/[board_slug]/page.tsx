"use client";

import { Board, Wave } from "@/app/models";
import { getAllWaves, getBoards } from "@/app/utils/AxiosFunctions";
import WaveList from "@/app/waves/WaveList";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: { board_slug: string };
}): React.ReactElement {
  const [boardWaves, setBoardWaves] = useState<Wave[]>([]);
  const [currentBoard, setCurrentBoard] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    getAllWaves(params.board_slug).then(({ waves }) => {
      setBoardWaves(waves);
    });
    getBoards().then(({ boards }) => {
      setCurrentBoard(() => {
        let newBoard = boards.find((board) => {
          return board.board_slug === params.board_slug;
        });
        return newBoard ? newBoard.board_name : "404: Board not found";
      });
    });
  }, []);

  return (
    <main className="m-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-violet-900">
        {currentBoard}
      </h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        <WaveList waves={boardWaves} />
      </div>
    </main>
  );
}
