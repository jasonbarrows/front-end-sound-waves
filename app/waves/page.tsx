"use client";
import WaveList from "./WaveList";
import { useEffect, useState } from "react";
import { Wave } from "../model";

function Waves(): React.ReactElement {
  const [waves, setWaves] = useState<Wave[]>([]);

  useEffect(() => {
    setWaves([
      {
        wave_id: 7,
        title: "Realigned logistical software",
        wave_url: "waveygravy.com",
        created_at: "2022-09-04T00:00:00Z",
        user_id: 7,
        board_id: 7,
        likes: 10,
        transcript: "I loved the plot twist in that movie!",
        censor: false,
      },
      {
        wave_id: 8,
        title: "Moxy,Olaf,Peggy and Eliza",
        wave_url: "ourchildren.com",
        created_at: "2022-10-04T00:00:00Z",
        user_id: 8,
        board_id: 8,
        likes: 8,
        transcript: "We love our babies!",
        censor: false,
      },
    ]);
  }, []);

  return (
    <section>
      <h2>All Waves</h2>
      <WaveList waves={waves} />
     
    </section>
  );
}

export default Waves;
