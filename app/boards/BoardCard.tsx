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
        <p className="text-xl font-medium text-cyan-700">{board.board_name}</p>
        <p>{board.description}</p>
      </div>
    </Link>
  );
}

export default BoardCard;
