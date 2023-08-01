import WavePlayer from "./WavePlayer";
import VoteButton from "./new/VoteButton";

function DetailedWaveCard(): React.ReactElement {
  return (
    <section>
      <p>You can view the wave details!</p>
      <VoteButton />
      <WavePlayer />
    </section>
  );
}

export default DetailedWaveCard;
