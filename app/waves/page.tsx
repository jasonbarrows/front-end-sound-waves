"use client";

import WaveList from "./WaveList";
import { useEffect, useState } from "react";
import { Wave } from "../models";
import { getAllWaves } from "../utils/AxiosFunctions";

function Waves(): React.ReactElement {
  const [waves, setWaves] = useState<Wave[]>([]);

  useEffect(() => {
    getAllWaves()
      .then(({ waves }) => {
        setWaves(waves);
      });
  }, []);

  return (
    <main className="m-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-violet-900">The Ocean</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        <WaveList waves={waves} />
      </div>
    </main>
  );
}

export default Waves;
