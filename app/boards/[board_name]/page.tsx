"use client";

import { Wave } from "@/app/models";
import WaveList from "@/app/waves/WaveList";
import { useParams } from "next/navigation";

export default function Page({
  params,
}: {
  params: { board_name: string };
}): React.ReactElement {
  const waves = [] as Wave[];

  return (
    <section className="flex flex-col m-1">
      <p>Board name {params.board_name}</p>
      <div className="flex justify-end">
        <input
          className="border-black-500 border-2"
          placeholder="New wave"
        ></input>
        <button className="border-4 border-pink-500">Post</button>
      </div>
      <WaveList waves={waves} />
    </section>
  );
}
