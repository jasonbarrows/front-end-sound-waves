import { UserContent, UserContext } from "@/app/context";
import { createWave, getBoards } from "@/app/utils/AxiosFunctions";
import {
  useReducer,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useRouter } from "next/navigation";

interface Props {
  audioData: Blob | null;
  setHasAudioDataError: Dispatch<SetStateAction<boolean>>;
}

function NewWaveForm({ audioData, setHasAudioDataError }: Props) {
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
  const [hasTitleError, setHasTitleError] = useState<boolean>(false);

  const router = useRouter();

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

    setHasAudioDataError(false);
    setHasTitleError(false);

    if (audioData !== null && newWaveFormData.title !== "") {
      setIsUploading(true);

      const formData = new FormData(event.target as HTMLFormElement);
      formData.append("audio_file", audioData as Blob, "audio.webm");

      createWave(formData)
        .then(({ wave }) => {
          router.push(`/waves/${wave.wave_id}`);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsUploading(false);
        });
    } else {
      if (audioData === null) {
        setHasAudioDataError(true);
      }
      if (newWaveFormData.title === "") {
        setHasTitleError(true);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-lg">
      <label className="font-medium mt-3" htmlFor="title">
        Title
      </label>
      <input
        className="mt-1 border-2 border-violet-700 rounded-full py-2 px-4 focus:outline-none focus:ring focus:ring-violet-300"
        id="title"
        type="text"
        name="title"
        onChange={setNewWaveFormData}
      />
      {hasTitleError && (
        <p className="mt-2 text-sm text-red-600">You need to enter a title.</p>
      )}
      <label className="font-medium mt-3" htmlFor="board_slug">
        Board
      </label>
      <select
        className="mt-1 border-2 border-violet-700 rounded-full py-2 px-4 focus:outline-none focus:ring focus:ring-violet-300"
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
      <input
        hidden
        onChange={setNewWaveFormData}
        id="username"
        name="username"
        value={currentUser?.username}
      />
      <div className="mt-3 flex flex-col items-center space-y-4">
        <button
          disabled={isUploading}
          className={`flex items-center border-2 shadow text-violet-50 border-violet-500 bg-violet-700 rounded-full py-3 px-6 ${
            isUploading ? "" : "active:bg-violet-900"
          }`}
        >
          {isUploading && <LoadingSpinner />}
          <span className="ml-1">{isUploading ? "Submitting" : "Submit"}</span>
        </button>
      </div>
    </form>
  );
}

export default NewWaveForm;
