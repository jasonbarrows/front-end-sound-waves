import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getCommentsbyWaveId } from "@/app/utils/AxiosFunctions";
import { Comment } from "@/app/models";
import CommentForm from "./CommentForm";

interface Props {
  wave_id: number;
  setUserComments: Dispatch<SetStateAction<number>>;
}

function CommentList({ wave_id, setUserComments }: Props): React.ReactElement {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getCommentsbyWaveId(wave_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  return (
    <section className="mt-4">
      <CommentForm
        comments={comments}
        setComments={setComments}
        setUserComments={setUserComments}
      />
      <h2 className="text-xl font-semibold text-violet-900 mt-4">Comments</h2>
      <div className="space-y-3 mt-6">
        {comments.length === 0 ? (
          <p>Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))
        )}
      </div>
    </section>
  );
}

export default CommentList;
