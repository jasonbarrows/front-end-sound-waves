"use client";

import { useParams } from "next/navigation";
import WaveDetails from "./WaveDetails";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { useEffect, useState } from "react";
import { getWaveById } from "@/app/utils/AxiosFunctions";
import { Wave } from "@/app/models";

export default function Page({
  params,
}: {
  params: { wave_id: number };
}): React.ReactElement {
  const [wave, setWave] = useState<Wave | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_BACKEND_BASE_URL);

    getWaveById(params.wave_id)
      .then(({ wave }) => {
        setWave(wave);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <main className="m-4 text-center sm:text-left">
        <p className="text-violet-900">Loading...</p>
      </main>
    );
  }

  return (
    <main className="m-4">
      <h1 className="text-2xl sm:text-3xl font-semibold text-violet-900">{wave?.title}</h1>
      <div className="mt-4 ">
        <WaveDetails wave={wave} />
        <CommentList wave_id={params.wave_id}/>
        <CommentForm />
      </div>
    </main>
  );
}
