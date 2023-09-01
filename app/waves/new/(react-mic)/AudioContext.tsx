"use client";

let AudioContext;

if (typeof window !== "undefined") {
  const audioCtx = new window.AudioContext();
  // const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  let analyser = audioCtx.createAnalyser();

  AudioContext = {
    getAudioContext() {
      return audioCtx;
    },

    getAnalyser() {
      return analyser;
    },

    resetAnalyser() {
      analyser = audioCtx.createAnalyser();
    },

    // decodeAudioData() {
    //   audioCtx.decodeAudioData(audioData).then(function(decodedData) {
    //     // use the decoded data here
    //   });
    // }
  };
}

export default AudioContext;
