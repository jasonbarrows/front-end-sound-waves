import { useParams } from "next/navigation";
import { UserContent, UserContext } from "@/app/context";
import { useState, useContext } from "react";
import { postComment } from "../../utils/AxiosFunctions";
import { Comment } from "../../models";
interface Props {
  comments: Comment[];
  setComments: (newComments: Comment[]) => void;
}

function CommentForm({ comments, setComments }: Props): React.ReactElement {
  const [newComment, setNewComment] = useState<string>("");
  const [apiError, setApiError] = useState<boolean>(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const { wave_id } = useParams();

  const { currentUser, setCurrentUser } = useContext(
    UserContext
  ) as UserContent;

  const username = currentUser?.username;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newComment.length > 0 && newComment.length <= 160) {
      postComment(wave_id, username, newComment)
        .then(({ comment }) => {
          comment.avatar_url = currentUser?.avatar_url;
          setComments((currComments) => {
            return [comment, ...currComments];
          });
          setNewComment("");
        })
        .catch((err) => {
          console.log(err, "add comment error");
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-lg">
      <div>
        <label htmlFor="comment" className="sr-only">
          Comment
        </label>
        <textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          id="comment"
          rows={5}
          className="placeholder:italic border-2 border-violet-700 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:ring-violet-300 mt-3 w-full"
        ></textarea>
        <p
          className={
            newComment.length > 160 ? "text-rose-700" : "text-gray-500"
          }
        >
          {160 - newComment.length} characters remaining
        </p>
      </div>
      <div>
        <button
          type="submit"
          value="submit"
          className={`outline-double outline-3 outline-offset-2 flex items-center border-2 shadow text-violet-50 border-violet-500 bg-violet-700 rounded-full mt-6 py-3 px-6 ${
            isUploading ? "" : "active:bg-violet-900"
          }`}
        >
          Add comment
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
