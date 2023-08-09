import MiniWavePlayer from "../waves/MiniWavePlayer";
import { Board } from "../models";
import Link from "next/link";
import { ago } from "../utils";
// import Image from "next/image";

interface Props {
  board: Board;
}

function BoardCard({ board }: Props): React.ReactElement {
  return (
    <Link href={`/boards/${board.board_slug}`}>
      <div className="p-4 w-full shadow border rounded-xl bg-white flex flex-col space-y-2">
        {/* <div className="flex items-center space-x-1">
          <img
            className="w-8 h-8 rounded-full"
            alt="Rounded avatar"
            src={board.avatar_url}
          />
          <p className="text-sm font-medium truncate text-neutral-700">
            {board.username}
          </p>
          <span className="text-neutral-400">•</span>
          <p className="text-sm font-light text-neutral-500">
            {ago(new Date(board.created_at))}
          </p>
        </div> */}
        <p className="text-xl font-medium text-cyan-700">{board.board_name}</p>
        <p>{board.description}</p>
      </div>
    </Link>
  );
}

export default BoardCard;
