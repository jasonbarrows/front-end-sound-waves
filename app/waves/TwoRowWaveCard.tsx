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

  const sectionClass =
    "flex flex-col shadow border-4 rounded-xl rounded-bl-[3rem] bg-white space-y-1 p-2 ";
  return (
    <section
      className={
        isPlaying
          ? sectionClass + "border-pink-600  "
          : sectionClass + "border-white"
      }
    >
      <p className="font-semibold text-violet-900 px-2 h-14 line-clamp-2 border rounded-xl bg-violet-100">
        {title}
      </p>
      <p className="text-xs  text-right mx-2 text-violet-900 ">{board_slug}</p>
      <div className="flex justify-between ">
        <div className="flex flex-col items-center justify-center">
          <audio
            src="https://mffyiqvrkwogdmivjovi.supabase.co/storage/v1/object/public/waves/749bee24a85c627815816970bb4ea5b1.webm"
            controls
            hidden
            ref={audioRef}
          />
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
        <div className="flex flex-col mx-2 text-xs space-y-1">
          <p className="self-end text-pink-700">{username}</p>
          <p className="self-end text-right text-neutral-500">
            {ago(created_at)}
          </p>
          <div className="flex space-x-2 self-end  text-neutral-700">
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              {likes}
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>
              {0}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
