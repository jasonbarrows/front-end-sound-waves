import WaveCard from "./WaveCard";
import { Wave } from "../models";
import TwoRowWaveCard from "./TwoRowWaveCard";

interface Props {
  waves: Wave[];
}

function WaveList({ waves }: Props) {
  let wavePair = [];
  const wavePairArray = [];
  let startNewPair = true;
  waves.forEach((wave) => {
    if (startNewPair) {
      wavePair.push(wave);
    } else {
      wavePair.push(wave);
      wavePairArray.push(wavePair);
      wavePair = [];
    }
    startNewPair = !startNewPair;
  });
  
  return wavePairArray.map(([wave1, wave2]) => {
    return (
      <section className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        <TwoRowWaveCard key={wave1.wave_id} wave={wave1} />
        <TwoRowWaveCard key={wave2.wave_id} wave={wave2} />
      </section>
    );
  });
  // return waves.map((wave) => (
  //   // <WaveCard key={wave.wave_id} wave={wave} />
  //   <TwoRowWaveCard key={wave.wave_id} wave={wave} />
  // ));
}

export default WaveList;
