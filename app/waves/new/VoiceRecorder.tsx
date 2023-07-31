"use client";

import { useState } from "react";
import { ReactMic } from "react-mic";
interface AudioBlob {
  blob: {
    size: number;
    type: string;
  };
  blobURL: string;
  options: {
    audioBitsPerSecond: number;
    mimeType: string;
  };
  startTime: number;
  stopTime: number;
}
const VoiceRecorder: React.FC = () => {
  const [recordedAudio, setRecordedAudio] = useState<string | undefined>(
    undefined
  );
  const [isRecording, setIsRecording] = useState(false);
  return (
    <>
      <section>
        <ReactMic
          record={isRecording}
          mimeType={"audio/webm"}
          onStop={(blob) => {
            const { blobURL } = blob;
            setRecordedAudio(blobURL);
          }}
          onData={(data: unknown) => {}}
        />
        <button
          className="border-4 border-pink-500"
          onClick={() => {
            setIsRecording(true);
          }}
        >
          Start
        </button>
        <button
          className="border-4  border-pink-500"
          onClick={() => {
            setIsRecording(false);
          }}
          type="button"
        >
          Stop
        </button>
        <audio controls src={recordedAudio}></audio>
      </section>
    </>
  );
};

export default VoiceRecorder;
