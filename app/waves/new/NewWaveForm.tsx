import { UserContent, UserContext } from "@/app/context";
import { Board } from "@/app/models";
import { getBoards } from "@/app/utils/AxiosFunctions";
import axios from "axios";
import { useReducer, useState, useEffect, useContext } from "react";

function NewWaveForm({ audioData }: { audioData: Blob | null }) {
  interface formState {
    title: string;
    board_slug: string;
    username: string;
  }
  const { currentUser, setCurrentUser } = useContext<UserContent>(UserContext);
  const [newWaveFormData, setNewWaveFormData] = useReducer(formReducer, {
    title: "",
    board_slug: "",
    username: currentUser.username,
  });
  function formReducer(state: formState, { target }: { target: EventTarget }) {
    return {
      ...state,
      [(target as HTMLFormElement).name]: (target as HTMLFormElement).value,
    };
  }
  const [allBoards, setAllBoards] = useState<Board[]>([]);
  const [boardLookup, setBoardLookup] = useState<[string, string][]>([]);

  useEffect(() => {
    getBoards().then(({ boards }) => {
      const newBoardLookup = boards.map(({ board_slug, board_name }) => {
        return [board_slug, board_name];
      });
      console.log(newBoardLookup);
      setBoardLookup(newBoardLookup);
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("audio_file", audioData as Blob, "audio.webm");

    axios
      .post("https://back-end-sound-waves.onrender.com/api/waves", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("it worked!");
        console.log(response);
      })
      .catch((err) => {
        console.log("it didn't work");
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        className="border-4 border-black"
        id="title"
        type="text"
        name="title"
        onChange={setNewWaveFormData}
      />
      <label htmlFor="board_slug">Board Slug:</label>
      <select
        className="border-4 border-black"
        onChange={setNewWaveFormData}
        name="board_slug"
      >
        {boardLookup.map((boardDetails) => {
          return (
            <option key={boardDetails[0]} value={boardDetails[0]}>
              {boardDetails[1]}
            </option>
          );
        })}
      </select>

      <label htmlFor="username">Username:</label>
      <input
        hidden
        onChange={setNewWaveFormData}
        id="username"
        name="username"
        value={currentUser.username}
      />
      <p>{currentUser.username}</p>
      <button>Submit</button>
    </form>
  );
}

export default NewWaveForm;
