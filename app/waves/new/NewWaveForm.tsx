import { Board } from "@/app/model";
import { getBoards } from "@/app/utils/AxiosFunctions";
import axios from "axios";
import { FormEvent, useReducer, useState, useEffect } from "react";

function NewWaveForm({ audioData }: { audioData: Blob | null }) {
  interface formState {
    title: string;
    board_slug: string;
    username: string;
  }
  const [newWaveFormData, setNewWaveFormData] = useReducer(formReducer, {
    title: "",
    board_slug: "",
    username: "",
  });

  const [allBoards, setAllBoards] = useState<Board[]>([]);
  const [boardLookup, setBoardLookup] = useState<Array<[string, string]>>([]);

  useEffect(() => {
    setAllBoards(() => {
      return getBoards().then(({ boards }: { boards: Board[] }) => {
        console.log(boards);
        const newBoardLookup = [];
        boards.map(({ board_slug, board_name }) => {
          newBoardLookup.push([board_slug, board_name]);
        });

        setBoardLookup(newBoardLookup);
        return boards;
      });
    });
  }, []);

  console.log(newWaveFormData);
  function formReducer(state: formState, { target }: { target: EventTarget }) {
    return {
      ...state,
      [(target as HTMLFormElement).name]: (target as HTMLFormElement).value,
    };
  }

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
      <label id="title">Title:</label>
      <input
        className="border-4 border-black"
        id="title"
        type="text"
        name="title"
        onChange={setNewWaveFormData}
      />
      <label id="board_slug">Board Slug:</label>
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

      <label id="username">Username:</label>
      <input
        className="border-4 border-black"
        id="username"
        type="text"
        name="username"
        onChange={setNewWaveFormData}
      />
      <button>Submit</button>
    </form>
  );
}

export default NewWaveForm;
