import CommentCard from "./CommentCard";

function CommentList(): React.ReactElement {
  return (
    <section>
      <p>This is the comment list!</p>
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </section>
  );
}

export default CommentList;
