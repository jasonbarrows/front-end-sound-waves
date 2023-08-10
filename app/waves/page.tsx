"use client";

import WaveList from "./WaveList";
import { useEffect, useState } from "react";
import { Wave } from "../models";
import { getAllWaves } from "../utils/AxiosFunctions";
import AddWave from "./AddWave";
import { WaveSkeleton } from "../Skeletons";

function Waves(): React.ReactElement {
  const [waves, setWaves] = useState<Wave[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    getAllWaves().then(({ waves }) => {
      setWaves(waves);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="m-4">
      <div className="flex justify-between">
        <h1 className="text-2xl sm:text-3xl font-semibold text-violet-900">
          The Ocean
        </h1>
        <AddWave />
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {isLoading ? (
          skeletonArray.map((num) => {
            return <WaveSkeleton key={num} />;
          })
        ) : (
          <WaveList waves={waves} />
        )}
      </div>
    </main>
  );
}

export default Waves;
