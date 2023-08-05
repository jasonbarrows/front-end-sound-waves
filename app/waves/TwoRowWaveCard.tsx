import { Wave } from "../models";
import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import { ago } from "../utils";
import MiniWavePlayer from "./MiniWavePlayer";

interface Props {
  wave: Wave;
  waveClicked: boolean;
  setWaveClicked: Dispatch<SetStateAction<boolean>>;
}

export default function TwoRowWaveCard({
  wave,
  waveClicked,
  setWaveClicked,
}: Props) {
  const { wave_url, title, board_slug, created_at, likes, username } = wave;
  //   const audioRef = useRef();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  //   useEffect(() => {
  //     if (isPlaying) {
  //       audioRef.current.play();
  //     } else {
  //       audioRef.current.pause();
  //     }
  //   }, [isPlaying, audioRef]);

  let sectionClass =
    "flex flex-col border-4 rounded-xl bg-white space-y-1 p-2 ";

  if (isPlaying) {
    sectionClass += "border-pink-600  ";
  } else {
    sectionClass += "border-white ";
  }
  if (waveClicked) {
    sectionClass += "pb-4 rounded-b-none border-pink-600 border-b-white ";
  } else {
    sectionClass += "mb-4 rounded-bl-[3rem] ";
  }

  return (
    <section className={sectionClass}>
      <p
        className="font-semibold text-violet-900 px-2 h-14 line-clamp-2 border rounded-xl bg-violet-100"
        onClick={() => {
          setWaveClicked((current) => !current);
        }}
      >
        {title}
      </p>
      <p
        className="text-xs  text-right mx-2 text-violet-900 "
        onClick={() => {
          setWaveClicked((current) => !current);
        }}
      >
        {board_slug}
      </p>
      <div className="flex justify-between ">
        <MiniWavePlayer
          wave_url={wave_url}
          //   audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <div
          className="flex flex-col mx-2 text-xs space-y-1"
          onClick={() => {
            setWaveClicked((current) => !current);
          }}
        >
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
