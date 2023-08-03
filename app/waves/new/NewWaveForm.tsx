import axios from "axios";
import { FormEvent, useReducer, useState } from "react";

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
      <input
        className="border-4 border-black"
        id="board_slug"
        type="text"
        name="board_slug"
        onChange={setNewWaveFormData}
      />
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
