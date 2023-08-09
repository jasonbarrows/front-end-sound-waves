import PlayIcon from "./PlayIcon";
import PauseIcon from "./PauseIcon";
import { Wave } from "./models";

export default function PlayButton({
  wave,
  isPlaying,
  togglePlay,
}: {
  wave: Wave | null,
  isPlaying: boolean,
  togglePlay: (wave: Wave) => void,
}) {
  let Icon = isPlaying ? PauseIcon : PlayIcon;

  return (
    <button
      type="button"
      className="h-8 w-8 flex items-center justify-center rounded-full text-violet-100 bg-violet-700 shadow-md"
      onClick={() => togglePlay(wave)}>
      <Icon className="h-4 w-4 fill-current" />
    </button>
  );
}
