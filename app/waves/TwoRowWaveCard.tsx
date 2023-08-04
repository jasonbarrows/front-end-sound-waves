import { Wave } from "../models";
import { useRef, useState, useEffect } from "react";
import { ago } from "../utils";

export default function TwoRowWaveCard({ wave }: { wave: Wave }) {
  const { wave_url, title, board_slug, created_at, likes, username } = wave;
  const audioRef = useRef();
  //   console.log(audioRef);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);
  return (
    <section className=" flex flex-col shadow border rounded-xl bg-white space-y-2 p-2">
      <p className="font-semibold text-violet-500">{title}</p>
      <p className="text-xs ">{board_slug}</p>
      <div className="flex space-x-2">
        <div className="flex flex-col items-center justify-center">
          <audio
            src="https://mffyiqvrkwogdmivjovi.supabase.co/storage/v1/object/public/waves/749bee24a85c627815816970bb4ea5b1.webm"
            controls
            hidden
            ref={audioRef}
          />
          <button
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
                className="w-16 h-16"
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
                className="w-16 h-16"
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
        <div className="flex flex-col mx-2 text-xs space-y-1">
          <p className="self-end">{username}</p>
          <p className="self-end">{ago(created_at)}</p>
          <div className="flex self-end space-x-6">
            <p>{likes}</p>
            <p>{0}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
