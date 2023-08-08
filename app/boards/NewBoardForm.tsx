function NewBoardForm(): React.ReactElement {
  return (
    <form className="flex-1 flex-col space-y-4 p-4">
      <input
        className="border-black-500 border-2"
        placeholder="Browse boards"
      ></input>
      <label htmlFor="title">Search</label>
      <input className="border-black-500 border-2"></input>
      <button className="border-4 border-pink-500">Add new Board:</button>
    </form>
  );
}

export default NewBoardForm;
