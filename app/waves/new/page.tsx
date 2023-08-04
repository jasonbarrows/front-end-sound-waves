"use client";

import { FormEvent, useEffect, useState } from "react";
import TranscriptViewer from "./TranscriptViewer";
import UploadAudio from "./UploadAudio";
import VoiceRecorder from "./VoiceRecorder";
import axios from "axios";
import NewWaveForm from "./NewWaveForm";

function Page() {
  const [audioData, setAudioData] = useState<Blob | null>(null);

  return (
    <main className="m-4">
      <h1 className="text-2xl sm:text-3xl font-semibold text-violet-900">
        Create a new wave
      </h1>

      <div className="">
        <VoiceRecorder setAudioData={setAudioData} />
        <NewWaveForm audioData={audioData} />
        {/* <UploadAudio />
        <TranscriptViewer /> */}
      </div>
    </main>
  );
}

export default Page;
