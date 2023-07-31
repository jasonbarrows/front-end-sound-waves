import TranscriptViewer from "./TranscriptViewer";
import UploadAudio from "./UploadAudio";
import VoiceRecorder from "./VoiceRecorder";

function Page() {
  return (
    <section>
      <h2>Create a new wave</h2>
      <VoiceRecorder />
      <UploadAudio />
      <TranscriptViewer />
    </section>
  );
}

export default Page;
