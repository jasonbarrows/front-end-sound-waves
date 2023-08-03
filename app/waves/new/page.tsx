"use client";

import { FormEvent, useEffect, useState } from "react";
import TranscriptViewer from "./TranscriptViewer";
import UploadAudio from "./UploadAudio";
import VoiceRecorder from "./VoiceRecorder";
import axios from "axios";

function Page() {
  const [audioData, setAudioData] = useState<Blob | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("audio_file", audioData, "audio.webm");

    axios
      .post("https://back-end-sound-waves.onrender.com/api/waves", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("it worked!");
        console.log(response);
      })
      .catch((err) => {
        console.log("it didn't work");
        console.log(err);
      });
  };

  return (
    <section>
      <h2>Create a new wave</h2>
      <VoiceRecorder setAudioData={setAudioData} />
      <form
        onSubmit={(e) => {
          console.log("submitting");
          handleSubmit(e);
        }}
      >
        <input name="title" value="Test Wave Title" />
        <input name="username" value="Big A" />
        <input name="board_slug" value="stupid-films" />
        <input name="created_at" value="2022-09-04T00:00:00Z" />

        <button>Submit</button>
      </form>
      <UploadAudio />
      <TranscriptViewer />
    </section>
  );
}

export default Page;
