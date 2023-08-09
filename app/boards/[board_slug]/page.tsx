"use client";

import { Board, Wave } from "@/app/models";
import { getAllWaves, getBoards } from "@/app/utils/AxiosFunctions";
import WaveList from "@/app/waves/WaveList";

import { useEffect, useState } from "react";
import { GiSurfBoard } from "react-icons/gi";

export default function Page({
  params,
}: {
  params: { board_slug: string };
}): React.ReactElement {
  const [boardWaves, setBoardWaves] = useState<Wave[]>([]);
  const [currentBoard, setCurrentBoard] = useState<Board | null>(null);

  useEffect(() => {
    getAllWaves(params.board_slug).then(({ waves }) => {
      setBoardWaves(waves);
    });
    getBoards().then(({ boards }) => {
      setCurrentBoard(() => {
        let newBoard = boards.find((board) => {
          return board.board_slug === params.board_slug;
        });
        return newBoard || null;
      });
    });
  }, []);

  return (
    <main className="">
      <div className="px-8 border-b-2 border-pink-700 pb-4 shadow-lg bg-white">
        <div className="flex items-center">
          <span className="text-pink-600">
            <GiSurfBoard className="w-8 h-8" />
          </span>
          <h2 className="ml-2 text-2xl sm:text-3xl font-semibold text-violet-900">
            {currentBoard?.board_name || '404: Board not found'}
          </h2>
        </div>
        <p className="mt-3 text-violet-800">
          {currentBoard?.description}
        </p>
      </div>
      <div className="m-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          <WaveList waves={boardWaves} />
        </div>
      </div>
    </main>
  );
}
