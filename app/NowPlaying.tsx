import { wave } from "./model";

interface Props {
  currentWave: wave;
}

const NowPlaying: React.FC<Props> = ({ currentWave }) => {
  return (
    <section>
      <p> Now playing</p>
    </section>
  );
};

export default NowPlaying;
