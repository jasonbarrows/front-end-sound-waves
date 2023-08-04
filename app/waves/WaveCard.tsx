import MiniWavePlayer from "./MiniWavePlayer";
import { Wave } from "../models";

interface Props {
  wave: Wave;
}

function WaveCard({ wave }: Props) {
  const { title, wave_url, board_slug } = wave;
  return (
    <section>
      <p>{board_slug}</p>
      <MiniWavePlayer
        wave_url={`https://mffyiqvrkwogdmivjovi.supabase.co/storage/v1/object/public/waves/${wave_url}`}
      />
      <p>{title}</p>
    </section>
  );
}

export default WaveCard;
