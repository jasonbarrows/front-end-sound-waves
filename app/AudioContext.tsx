"use client";

import { useState, createContext, ReactNode, useRef, ChangeEvent } from "react";
import { Wave } from "./models";
import PlayButton from "./PlayButton";
import axios from "axios";

export interface WaveContextType {
  currentWave: Wave | null;
  isPlaying: boolean;
  nowPlaying: () => JSX.Element;
  togglePlay: (wave: Wave | null) => void;
}

export const WaveContext = createContext<WaveContextType | null>(null);

let animationController: number;
let timeController: number;

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [currentWave, setCurrentWave] = useState<Wave | null>(null);
  const [globalIsPlaying, setGlobalIsPlaying] = useState<boolean>(false);
  console.log(currentWave);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const progressBar = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const source = useRef<MediaElementAudioSourceNode | null>(null);
  const analyser = useRef<AnalyserNode | null>(null);

  const calculateTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);

    return `${minutes}:${("00" + seconds).slice(-2)}`;
  };

  const whilePlaying = () => {
    const time = Math.floor(audioRef.current?.currentTime as number);
    if (progressBar.current) {
      progressBar.current.value = time.toString(); //audioRef.current.currentTime;
    }
    setCurrentTime(time); //audioRef.current.currentTime);
    timeController = requestAnimationFrame(whilePlaying);
  };

  const changeRange = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
    }
    setCurrentTime(Number(event.target?.value));
  };

  const handlePlayAudio = () => {
    let audioContext = new AudioContext();

    if (!source.current) {
      if (audioRef.current) {
        source.current = audioContext.createMediaElementSource(
          audioRef.current
        );
        analyser.current = audioContext.createAnalyser();
        source.current.connect(analyser.current);
        analyser.current?.connect(audioContext.destination);
        analyser.current.fftSize = 64;
      }
    }

    const bufferLength = analyser.current?.frequencyBinCount;
    let dataArray: unknown;
    if (bufferLength) {
      dataArray = new Uint8Array(bufferLength);
    }

    // if (audioRef.current.paused) {
    //   setIsPlaying(false);
    //   return cancelAnimationFrame(animationController);
    // }

    const ctx = canvasRef.current?.getContext("2d");
    let barWidth: unknown;
    if (canvasRef.current && bufferLength) {
      barWidth = canvasRef.current.width / bufferLength;
    }
    let barHeight: unknown;
    let x;

    let gradient = ctx?.createLinearGradient(
      0,
      0,
      canvasRef.current?.width as number,
      canvasRef.current?.height as number
    );

    gradient?.addColorStop(0, "#0284c7");
    gradient?.addColorStop(0.5, "#7c3aed");
    gradient?.addColorStop(1.0, "#db2777");

    function animate() {
      x = 1;
      ctx?.clearRect(
        0,
        0,
        canvasRef.current?.width as number,
        canvasRef.current?.height as number
      );
      analyser.current?.getByteFrequencyData(dataArray as Uint8Array);

      for (let i = 0; i < (bufferLength as number); i++) {
        const typedDataArray = dataArray as Uint8Array;
        if (canvasRef.current?.height) {
          barHeight = (typedDataArray[i] / 256) * canvasRef.current?.height;
        }
        if (ctx?.fillStyle) {
          ctx.fillStyle = gradient as CanvasGradient;
        }

        if (ctx?.fillRect) {
          const typedBarHeight = barHeight as number;
          ctx.fillRect(
            x,
            canvasRef.current?.height as number,
            barWidth as number,
            -typedBarHeight
          );
        }
        x += (barWidth as number) + 1;
      }

      animationController = requestAnimationFrame(animate);
    }

    animate();
  };

  function pause() {
    audioRef.current?.pause();
    setIsPlaying(false);
  }

  function play(wave: Wave) {
    if (
      wave.hasOwnProperty("wave_url") &&
      currentWave?.wave_url !== wave.wave_url
    ) {
      setCurrentWave(wave);
      axios
        .get(
          `https://mffyiqvrkwogdmivjovi.supabase.co/storage/v1/object/public/waves/${wave.wave_url}`,
          {
            responseType: "blob",
          }
        )
        .then(({ data }) => {
          if (audioRef.current) {
            audioRef.current.src = URL.createObjectURL(data);
          }
          return data.arrayBuffer();
        })
        .then((arrayBuffer) => {
          const audioCtx = new AudioContext();
          return audioCtx.decodeAudioData(arrayBuffer);
        })
        .then((data) => {
          const seconds = Math.floor(data.duration);
          setDuration(seconds);
          if (progressBar.current) {
            progressBar.current.max = seconds.toString();
          }
          audioRef.current?.play();

          audioRef.current?.addEventListener("ended", () => {
            setIsPlaying(false);
            cancelAnimationFrame(animationController);
          });
        });
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(true);
    handlePlayAudio();
    timeController = requestAnimationFrame(whilePlaying);
  }

  const togglePlay = (wave: Wave | null) => {
    if (wave) {
      if (isPlaying) {
        pause();
        cancelAnimationFrame(animationController);
        cancelAnimationFrame(timeController);

        if (currentWave?.wave_url !== wave?.wave_url) {
          play(wave);
        }
      } else {
        play(wave);
      }
    }
  };

  const nowPlaying = () => (
    <>
      {/* Some kind of issue with how the audio is decoded and put into the audio ref. Seems like webm can be played fine on Safari */}
      <audio
        controls
        src={`https://mffyiqvrkwogdmivjovi.supabase.co/storage/v1/object/public/waves/${currentWave?.wave_url}`}
        // ref={audioRef}
      />
      {/* <audio ref={audioRef} /> */}

      <canvas
        ref={canvasRef}
        width={320}
        height={40}
        className="border border-neutral-300 rounded-md  shadow-md box-content"
      />
      <div className="mt-2 px-2 w-80 flex items-center justify-between space-x-2">
        <PlayButton
          wave={currentWave}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
        />
        <div className="font-mono text-xs">{calculateTime(currentTime)}</div>
        <div className="relative w-full flex-1 flex items-center">
          <input
            ref={progressBar}
            type="range"
            defaultValue={0}
            onChange={changeRange}
            className="w-full appearance-none bg-transparent accent-red-500 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-neutral-500/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:-mt-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-700"
          />
          {/* <div
            className="absolute h-2 rounded-l-full bg-violet-300"
            style={{width: `calc((100% - 0.5rem) * ${currentTime / duration})`}}
          /> */}
        </div>
        <div className="font-mono text-xs">{calculateTime(duration)}</div>
      </div>
    </>
  );

  return (
    <WaveContext.Provider
      value={{
        currentWave,
        isPlaying,
        nowPlaying,
        togglePlay,
      }}
    >
      {children}
    </WaveContext.Provider>
  );
};
