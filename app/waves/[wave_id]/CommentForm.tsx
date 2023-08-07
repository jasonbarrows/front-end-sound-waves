function CommentForm(): React.ReactElement {
  return (
    <form className="mt-3">
      <div>
        <label htmlFor="comment" className="sr-only">Comment</label>
        <input id="comment" className="border-black-500 border-2"></input>
      </div>
      <button>Add comment</button>
    </form>
  );
}

export default CommentForm;
