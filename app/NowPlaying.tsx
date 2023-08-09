"use client";

import { Wave } from "./models";
import { WaveContext, WaveContextType } from "./AudioContext";
import { useContext, useEffect, useRef } from "react";

const NowPlaying: React.FC = () => {
  const {
    currentWave,
    setCurrentWave,
    globalIsPlaying,
    setGlobalIsPlaying,
    nowPlaying,
  } = useContext(WaveContext) as WaveContextType;

  return (
    <div
      hidden={globalIsPlaying}
      className="flex items-center overflow-hidden space-y-1 left-0 right-0 fixed mx-3 bottom-3 h-28 rounded-t-lg justify-around"
    >
      {/* <div className="p-1.5 flex items-center justify-center ring-2 ring-pink-400 text-pink-700 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-0.5 w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd"
          />
        </svg>
      </div> */}
      <div className="pt-2 p-4 w-full shadow-lg flex flex-col space-y-1.5 bg-white border-2 border-violet-700 rounded-[2rem]">
        <div className="mx-3 flex flex-col">
          <span className="text-neutral-400 text-xs">Now playing: </span>
          <span className="block text-sm font-semibold truncate">
            {currentWave?.title}
          </span>
        </div>
        <div className="mx-auto">{nowPlaying(currentWave?.wave_url)}</div>
      </div>
    </div>
  );
};

export default NowPlaying;
