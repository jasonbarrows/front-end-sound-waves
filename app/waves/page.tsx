"use client";

import WaveList from "./WaveList";
import { useEffect, useState } from "react"

type Wave = {
  wave_id: number;
  title: string;
  user: {
    username: string,
    avatar_url: string,
  };
}

export default function Waves() {
  const [waves, setWaves] = useState<Wave[]>([]);

  useEffect(() => {
    setWaves([
      {
        wave_id: 1,
        title: "Harry Potter",
        user: { username: "Moxy", avatar_url: "" },
      }
    ]);
  }, []);

  return (
    <section>
      <h2>All Waves</h2>
      <WaveList waves={waves} />
    </section>
  );
}
