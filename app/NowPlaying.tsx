"use client";

import Link from "next/link";
import { WaveContext, WaveContextType } from "./AudioContext";
import { useContext } from "react";

const NowPlaying: React.FC = () => {
  const { currentWave, nowPlaying } = useContext(
    WaveContext
  ) as WaveContextType;

  return (
    <div className="flex items-center space-y-1 left-0 right-0 fixed -m-0.5 bottom-0 h-32 justify-around">
      <div className="py-2 p-4 w-full shadow-lg flex flex-col space-y-1 bg-white border-t-2 border-b-0 border-pink-700">
        <div className="mx-3 flex items-baseline text-sm">
          <span className="whitespace-nowrap text-neutral-500">
            Now playing:{" "}
          </span>
          <span className=" ml-2 font-medium text-violet-900 truncate">
            {currentWave ? (
              <Link href={`/waves/${currentWave.wave_id}`}>
                {currentWave.title}
              </Link>
            ) : (
              "Stopped"
            )}
          </span>
        </div>
        <div className="mx-auto">{nowPlaying()}</div>
      </div>
    </div>
  );
};

export default NowPlaying;
