"use client";

import { Wave } from "./models";
import { WaveContext } from "./AudioContext";
import { useContext } from "react";

interface Props {
  currentWave: Wave;
}

const NowPlaying: React.FC<Props> = () => {
  const { currentWave, setCurrentWave } = useContext(WaveContext);
  // const { title, wave_url } = currentWave;
  console.log(currentWave);
  return (
    <div className="flex flex-row items-center space-y-1 bg-white w-full fixed bottom-0 h-32 justify-around">
      <div className="p-1.5 flex items-center justify-center ring-2 ring-pink-400 text-pink-700 rounded-full">
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
      </div>
      <div className="flex flex-col ">
        <p className="text-xs"> Now playing</p>
        <audio controls></audio>
      </div>
    </div>
  );
};

export default NowPlaying;
