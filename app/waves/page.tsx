"use client";

import WaveList from "./WaveList";
import { useEffect, useState } from "react";
import { Wave } from "../models";
import axios from "axios";

function Waves(): React.ReactElement {
  const [waves, setWaves] = useState<Wave[]>([
    // {
    //   wave_id: 7,
    //   title: "Realigned logistical software",
    //   wave_url:
    //     "https://adqofveagcushbnvilmc.supabase.co/storage/v1/object/public/test-1/10s%20test3.webm",
    //   created_at: "2022-09-04T00:00:00Z",
    //   username: "BigC",
    //   board_slug: "soft-ware",
    //   likes: 10,
    //   transcript: "I loved the plot twist in that movie!",
    //   censor: false,
    // },
    // {
    //   wave_id: 8,
    //   title: "Moxy,Olaf,Peggy and Eliza",
    //   wave_url:
    //     "https://adqofveagcushbnvilmc.supabase.co/storage/v1/object/public/test-1/12s%20test1.wav",
    //   created_at: "2022-10-04T00:00:00Z",
    //   username: "BigM",
    //   board_slug: "Moxy-forever",
    //   likes: 8,
    //   transcript: "We love our babies!",
    //   censor: false,
    // },
  ]);

  useEffect(() => {
    axios
      .get("https://back-end-sound-waves.onrender.com/api/waves")
      .then(({ data }) => {
        console.log(data);
        setWaves(data.waves);
      });
  }, []);

  return (
    <main className="m-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-violet-900">The Ocean</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <WaveList waves={waves} />
      </div>
    </main>
  );
}

export default Waves;
