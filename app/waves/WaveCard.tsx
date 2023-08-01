import MiniWavePlayer from "./MiniWavePlayer";
import { Wave } from "../model";

interface Props {
  wave: Wave;
}

function WaveCard({ wave }: Props) {
  const { title, wave_url, board_id } = wave;
  return (
    <section>
      <p>Board: {board_id}</p>
      <MiniWavePlayer wave_url={wave_url} />
      <p>{title}</p>
    </section>
  );
}

export default WaveCard;
