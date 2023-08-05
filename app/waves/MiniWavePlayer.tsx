import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface Props {
  wave_url: string;
  audio_ref: unknown;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}

function MiniWavePlayer({
  wave_url,

  isPlaying,
  setIsPlaying,
}: Props) {
  
  const audioRef = useRef();
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);
  return (
    <div className="flex flex-col items-center justify-center">
      <audio src={wave_url} controls hidden ref={audioRef} />
      <button
        className={isPlaying ? "text-violet-900" : "text-pink-700 "}
        onClick={() => {
          setIsPlaying((current) => !current);
        }}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default MiniWavePlayer;
