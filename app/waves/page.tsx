"use client";

import WaveList from "./WaveList";
import { useEffect, useState } from "react";
import { Wave } from "../models";
import { getAllWaves } from "../utils/AxiosFunctions";
import AddWave from "./AddWave";

function Waves(): React.ReactElement {
  const [waves, setWaves] = useState<Wave[]>([]);

  useEffect(() => {
    getAllWaves().then(({ waves }) => {
      setWaves(waves);
    });
  }, []);

  return (
    <main className="m-4">
      <div className="flex justify-between">
        <h1 className="text-2xl sm:text-3xl font-extralight text-violet-900">
          The Ocean
        </h1>
        <AddWave />
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        <WaveList waves={waves} />
      </div>
    </main>
  );
}

export default Waves;
