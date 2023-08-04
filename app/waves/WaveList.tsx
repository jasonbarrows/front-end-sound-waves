import WaveCard from "./WaveCard";
import { Wave } from "../models";

interface Props {
  waves: Wave[];
}

function WaveList({ waves }: Props) {
  return waves.map((wave) => (
    <WaveCard key={wave.wave_id} wave={wave} />
  ))
}

export default WaveList;
