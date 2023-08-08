import { useContext, useEffect, useRef, useState } from "react";
import { Wave } from "../models";
import { ago } from "../utils";
import { WaveContext, WaveContextType } from "../AudioContext";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

interface Props {
  wave: Wave;
}

function WaveCard({ wave }: Props) {
  const { title, wave_url, board_slug, created_at, username, avatar_url } = wave;
  const {
    currentWave,
    setCurrentWave,
    globalIsPlaying,
    setGlobalIsPlaying,
    play,
    pause,
  } = useContext(WaveContext) as WaveContextType;
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>();


  useEffect(() => {
    if (isPlaying) {
      play();
    }
  }, [currentWave]);

  return (
    <div className="p-4 w-full shadow border rounded-xl bg-white flex flex-col space-y-2">
      <div className="flex items-center space-x-1">
        <img className="w-8 h-8 rounded-full" src={avatar_url}></img>
        <p className="text-sm font-medium truncate text-neutral-700">
          {username}
        </p>
        <span className="text-neutral-300">•</span>
        <p className="text-sm font-light text-neutral-500">
          {ago(new Date(created_at))}
        </p>
      </div>
      <Link href={`/waves/${wave.wave_id}`}>
        <p className="text-xl font-medium text-sky-700">{title}</p>
      </Link>
      <div className="w-full flex items-center space-x-2 text-sm font-medium text-violet-700">
        <button
          className="flex items-center"
          onClick={() => {
            setCurrentWave(wave);
            setIsPlaying((current) => !current);
            if (isPlaying) {
              pause();
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
          <span className="ml-1">{isPlaying ? "Pause" : "Listen"}</span>
        </button>
        <span className="text-neutral-300">/</span>
        <p className="text-sm font-light">on b/{board_slug}</p>
        {/* <p>Show transcript</p> */}
      </div>
      <div className="flex justify-end space-x-4">
        <div className="flex items-center space-x-1">
          <AiOutlineHeart className="w-5 h-5 text-neutral-300"/>
          <p className="text-sm text-neutral-500">{wave.likes}</p>
        </div>
        <div className="flex items-center space-x-1">
          <FaRegComment className="w-5 h-5 text-neutral-300"/>
          <p className="text-sm text-neutral-500">{wave.comment_count}</p>
        </div>
      </div>
    </div>
  );
}

export default WaveCard;
