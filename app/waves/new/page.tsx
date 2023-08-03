"use client";

import { FormEvent, useEffect, useState } from "react";
import TranscriptViewer from "./TranscriptViewer";
import UploadAudio from "./UploadAudio";
import VoiceRecorder from "./VoiceRecorder";
import axios from 'axios';

function Page() {
  const [audioData, setAudioData] = useState<Blob | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('audio_file', audioData, 'audio.webm');

    axios.post('http://localhost:9091/api/waves',
    formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <section>
      <h2>Create a new wave</h2>
      <VoiceRecorder setAudioData={setAudioData} />
      <form onSubmit={handleSubmit}>
        <input name="title" value="Test Wave Title" />
        <input name="username" value="testuser" />
        <input name="board_slug" value="board-slug" />
        <button>Submit</button>
      </form>
      <UploadAudio />
      <TranscriptViewer />
    </section>
  );
}

export default Page;
