"use client";

import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";
import { Wave } from "./models";
export interface WaveContextType {
  currentWave: Wave;
  setCurrentWave: Dispatch<SetStateAction<Wave>>;
  globalIsPlaying: boolean;
  setGlobalIsPlaying: Dispatch<SetStateAction<boolean>>;
}

export const WaveContext = createContext<WaveContextType | null>(null);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [currentWave, setCurrentWave] = useState<Wave>({
    wave_id: 0,
    title: "",
    wave_url: "",
    created_at: "",
    username: "",
    board_slug: "",
    likes: 0,
    transcript: "",
    censor: false,
  });
  const [globalIsPlaying, setGlobalIsPlaying] = useState<boolean>(false);
  const playerRef = useRef<HTMLAudioElement>();

  function pause() {
    playerRef.current.pause();
  }

  function play() {
    playerRef.current.play();
  }

  const nowPlaying = (wave_url) => (
    <audio
      controls
      ref={playerRef}
      src={
        wave_url && "https://mffyiqvrkwogdmivjovi.supabase.co/storage/v1/object/public/waves/" +
        wave_url
      }
    ></audio>
  );
  return (
    <WaveContext.Provider
      value={{
        currentWave,
        setCurrentWave,
        globalIsPlaying,
        setGlobalIsPlaying,
        nowPlaying,
        play,
        pause,
      }}
    >
      {children}
    </WaveContext.Provider>
  );
};
