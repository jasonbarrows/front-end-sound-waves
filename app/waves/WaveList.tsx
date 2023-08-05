import WaveCard from "./WaveCard";
import { Wave } from "../models";
import TwoRowWaveCard from "./TwoRowWaveCard";
import { useState } from "react";
import WaveListDisplay from "./WaveListDisplay";

interface Props {
  waves: Wave[];
}

function WaveList({ waves }: Props) {
  const [wave1Clicked, setWave1Clicked] = useState(false);
  const [wave2Clicked, setWave2Clicked] = useState(false);
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
    return <WaveListDisplay wave1={wave1} wave2={wave2} />;
  });
  // return waves.map((wave) => (
  //   // <WaveCard key={wave.wave_id} wave={wave} />
  //   <TwoRowWaveCard key={wave.wave_id} wave={wave} />
  // ));
}

export default WaveList;
