"use client";

import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NowPlaying from "./NowPlaying";
import { Wave } from "./models";

export default function Header(): React.ReactNode {
  const [currentWave, setCurrentWave] = useState<Wave | null>(null);

  return (
    <header className="w-full bg-white shadow-lg">
      <div className="container mx-auto">
        <div className="px-4">
          <div className="p-4 w-full flex items-center justify-between">
            <NowPlaying currentWave={currentWave} />
            <p className="text-xl text-violet-800">
              <span className="font-extralight">Sound</span>
              <span className="font-semibold">Waves</span>
            </p>
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
