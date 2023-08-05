import { useState } from "react";
import TwoRowWaveCard from "./TwoRowWaveCard";

export default function WaveListDisplay({ wave1, wave2 }) {
  const [wave1Clicked, setWave1Clicked] = useState(false);
  const [wave2Clicked, setWave2Clicked] = useState(false);

  let detailedWaveClass =
    "flex flex-col  border-4 border-pink-500 -mt-1 rounded-xl bg-white space-y-1 p-2  mb-4 ";

  wave1Clicked ? (detailedWaveClass += "rounded-tl-none ") : null;
  wave2Clicked ? (detailedWaveClass += "rounded-tr-none ") : null;
  return (
    <div>
      <section className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        <TwoRowWaveCard
          key={wave1.wave_id}
          wave={wave1}
          waveClicked={wave1Clicked}
          setWaveClicked={setWave1Clicked}
        />
        <TwoRowWaveCard
          key={wave2.wave_id}
          wave={wave2}
          waveClicked={wave2Clicked}
          setWaveClicked={setWave2Clicked}
        />
      </section>
      {wave1Clicked || wave2Clicked ? (
        <p className={detailedWaveClass}>Detailed wave view goes here</p>
      ) : null}
    </div>
  );
}
