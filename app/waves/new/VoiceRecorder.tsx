"use client";

import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, useState } from "react";
// import { ReactMic } from "react-mic";
import ReactMic from "./(react-mic)/ReactMic";

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

function VoiceRecorder({
  setAudioData,
}: {
  setAudioData: Dispatch<SetStateAction<Blob | null>>;
}) {
  const [recordedAudio, setRecordedAudio] = useState<string | undefined>(
    undefined
  );
  const [isRecording, setIsRecording] = useState(false);

  return (
    <>
      <section className="mt-4 flex flex-col items-center space-y-4 ">
        {/* <ReactMic
          className="w-full h-48 border rounded-md "
          strokeColor="#6d28d9"
          record={isRecording}
          mimeType={"audio/webm"}
          onStop={(blob) => {
            const { blobURL } = blob;
            setRecordedAudio(blobURL);
            setAudioData(blob.blob);
          }}
          onData={(data: unknown) => {}}
        /> */}
        <ReactMic
          className="w-full h-48 border rounded-md "
          strokeColor="#6d28d9"
          record={isRecording}
          mimeType={"audio/wav"}
          onStop={(blob) => {
            const { blobURL } = blob;
            setRecordedAudio(blobURL);
            setAudioData(blob.blob);
          }}
          onData={(data: unknown) => {}}
        />
        <button
          className={` flex border-2 bg-white  rounded-full p-3 ${
            isRecording
              ? "text-pink-600 border-pink-600"
              : "text-violet-700 border-violet-500"
          }`}
          onClick={() => {
            setIsRecording((current) => !current);
          }}
        >
          {!isRecording ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
              <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span className="ml-2">
            {isRecording ? "Stop recording" : "Record new wave"}
          </span>
        </button>

        <audio controls src={recordedAudio}></audio>
      </section>
    </>
  );
}

export default VoiceRecorder;
