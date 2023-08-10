"use client";
import { useState, useEffect } from "react";
import WaveDetails from "./WaveDetails";
import CommentList from "./CommentList";
import { getWaveById } from "@/app/utils/AxiosFunctions";
import { Wave } from "@/app/models";
import { WaveDetailSkeleton } from "@/app/Skeletons";

export default function Page({
  params,
}: {
  params: { wave_id: number };
}): React.ReactElement {
  const [wave, setWave] = useState<Wave | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userComments, setUserComments] = useState<number>(0);
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    getWaveById(params.wave_id)
      .then(({ wave }) => {
        setWave(wave);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="m-4">
      <h1 className="text-2xl sm:text-3xl font-semibold text-violet-900">
        {wave?.title}
      </h1>
      <div className="mt-4 ">
        {isLoading ? (
          <WaveDetailSkeleton />
        ) : (
          <WaveDetails wave={wave} userComments={userComments} />
        )}

        <CommentList
          wave_id={params.wave_id}
          setUserComments={setUserComments}
        />
      </div>
    </main>
  );
}
