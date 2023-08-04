import { Wave } from "../models";
import { ago } from "../utils";

interface Props {
  wave: Wave;
}

function WaveCard({ wave }: Props) {
  const { title, wave_url, board_slug, created_at, username } = wave;

  return (
    <div className="p-4 w-full shadow border rounded-xl bg-white flex flex-col space-y-2">
      <div className="flex items-center space-x-1">
        <p className="text-sm font-medium truncate text-neutral-700">{username}</p>
        <span className="text-neutral-300">•</span>
        <p className="text-sm font-light text-neutral-500">{ago(new Date(created_at))}</p>
      </div>
      <p className="text-xl font-medium text-sky-700">{title}</p>
      <div className="w-full flex items-center space-x-2 text-sm font-medium text-violet-700">
        <button className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
          <span className="ml-1">Listen</span>
        </button>
        <span className="text-neutral-300">/</span>
        <p className="text-sm font-light">on b/{board_slug}</p>
        {/* <p>Show transcript</p> */}
      </div>
      <div className="flex justify-end space-x-4">
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-neutral-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <p className="text-sm text-neutral-500">{wave.likes}</p>
        </div>
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-neutral-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
          </svg>
          <p className="text-sm text-neutral-500">{wave.comment_count}</p>
        </div>
      </div>
    </div>
  );
}

export default WaveCard;
