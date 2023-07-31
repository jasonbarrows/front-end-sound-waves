'use client'

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
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState<Boolean>(false);
  return (
    <section>
      <ReactMic
        record={isRecording}
        mimeType={"audio/webm"}
        onStop={(blob: AudioBlob) => {
          const { blobURL } = blob;
          setRecordedAudio(blobURL);
        }}
        onData={(data: unknown) => {
          console.log(data);
        }}
      />
    </section>
  );
};

export default VoiceRecorder;
