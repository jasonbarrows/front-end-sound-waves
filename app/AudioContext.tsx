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
// export const isPlayingContext = createContext(null)

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
  function play(data) {
    // if (data) {
    //   dispatch({ type: "SET_META", payload: data });

    //   if (playerRef.current.currentSrc !== data.audio.src) {
    //     let playbackRate = playerRef.current.playbackRate;
    //     playerRef.current.src = data.audio.src;
    //     playerRef.current.load();
    //     playerRef.current.pause();
    //     playerRef.current.playbackRate = playbackRate;
    //     playerRef.currentTime = 0;
    //   }
    // }

    playerRef.current.play();
  }

  function pause() {
    playerRef.current.pause()
  }

  const nowPlaying = (wave_url) => (
    <audio
      controls
      ref={playerRef}
      src={
        "https://mffyiqvrkwogdmivjovi.supabase.co/storage/v1/object/public/waves/" +
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
        pause
      }}
    >
      {children}
    </WaveContext.Provider>
  );
};
