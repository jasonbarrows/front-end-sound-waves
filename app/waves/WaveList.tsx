import WaveCard from "./WaveCard";
import { Wave } from "../models";
import TwoRowWaveCard from "./TwoRowWaveCard";

interface Props {
  waves: Wave[];
}

function WaveList({ waves }: Props) {
  return waves.map((wave) => (
    // <WaveCard key={wave.wave_id} wave={wave} />
    <TwoRowWaveCard key={wave.wave_id} wave={wave} />
  ))
}

export default WaveList;
