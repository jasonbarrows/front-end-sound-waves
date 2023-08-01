"use client";
import { useParams } from "next/navigation";
import WaveView from "./WaveView";
// const params = useParams();

export default function Page({
  params,
}: {
  params: { wave_id: number };
}): React.ReactElement {
  return (
    <section>
      <p>Wave number {params.wave_id}</p>
      <WaveView />
    </section>
  );
}
