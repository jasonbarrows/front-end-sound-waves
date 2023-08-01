import WaveCard from "./WaveCard";
import { Wave } from "../model";

interface Props {
  waves: Wave[];
}

function WaveList({ waves }: Props) {
  return (
    <section>
      {waves.map((wave) => {
        return <WaveCard key={wave.wave_id} wave={wave} />;
      })}
    </section>
  );
}

export default WaveList;
