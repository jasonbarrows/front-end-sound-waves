import { UserContent, UserContext } from "@/app/context";
import { Board } from "@/app/models";
import { createWave, getBoards } from "@/app/utils/AxiosFunctions";
import axios from "axios";
import { useReducer, useState, useEffect, useContext } from "react";
import LoadingSpinner from "./LoadingSpinner";

function NewWaveForm({ audioData }: { audioData: Blob | null }) {
  interface formState {
    title: string;
    board_slug: string;
    username: string | undefined;
  }

  const { currentUser, setCurrentUser } = useContext(
    UserContext
  ) as UserContent;

  const [newWaveFormData, setNewWaveFormData] = useReducer(formReducer, {
    title: "",
    board_slug: "",
    username: currentUser?.username,
  });

  function formReducer(state: formState, { target }: { target: EventTarget }) {
    return {
      ...state,
      [(target as HTMLFormElement).name]: (target as HTMLFormElement).value,
    };
  }

  const [boardLookup, setBoardLookup] = useState<string[][]>([]);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  useEffect(() => {
    getBoards().then(({ boards }) => {
      const newBoardLookup = boards.map(({ board_slug, board_name }) => {
        return [board_slug, board_name];
      });
      setBoardLookup(newBoardLookup);
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("audio_file", audioData as Blob, "audio.webm");
    setIsUploading(true);
    createWave(formData)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsUploading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-lg">
      <label className="text-lg mt-3" htmlFor="title">
        Title:
      </label>
      <input
        className="border-2 border-violet-700 rounded-full p-1 focus:outline-none focus:ring focus:ring-violet-300"
        id="title"
        type="text"
        name="title"
        onChange={setNewWaveFormData}
      />
      <label className="text-lg mt-3" htmlFor="board_slug">
        Board Slug:
      </label>
      <select
        className="border-2 border-violet-700 rounded-full p-1 focus:outline-none focus:ring focus:ring-violet-300"
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
      <div className="flex flex-row">
        <label className="text-lg mt-3" htmlFor="username">
          Username:
        </label>
        <input
          hidden
          onChange={setNewWaveFormData}
          id="username"
          name="username"
          value={currentUser?.username}
        />
        <p className="ml-2 mt-3">{currentUser?.username}</p>
      </div>
      <div className="mt-4 flex flex-col items-center space-y-4">
        <button className="flex border-2 bg-violet-700 shadow border-violet-500 rounded-full p-3 text-white hover:bg-violet-200">
          {isUploading && <LoadingSpinner />}
          {isUploading ? "Submitting" : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default NewWaveForm;
