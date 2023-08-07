import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getCommentsbyWaveId } from "@/app/utils/AxiosFunctions";

function CommentList(props): React.ReactElement {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getCommentsbyWaveId(props.wave_id)
    .then((res) => {
      console.log(res, '<<<')
      setComments(res.comments);
    });
  }, [])

  return (
    <section className="mt-4">
      <h2 className="text-xl font-semibold text-violet-900">Comments</h2>
      <div className="space-y-3 mt-2">
        {comments.length === 0
          ? <p>Be the first to make a wave!</p>
          : comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </div>
    </section>
  );
}

export default CommentList;
