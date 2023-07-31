import DetailedWaveCard from "../DetailedWaveCard";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

function WaveView(): React.ReactElement {
  return (
    <section>
      <DetailedWaveCard />
      <CommentList />
      <CommentForm />
    </section>
  );
}

export default WaveView;
