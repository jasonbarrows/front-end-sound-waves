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
    <section>
      <h2>Create a new wave</h2>
      <VoiceRecorder setAudioData={setAudioData} />
      <NewWaveForm audioData={audioData} />
      <UploadAudio />
      <TranscriptViewer />
    </section>
  );
}

export default Page;
