import axios from "axios";

const api = axios.create({
  baseURL: "https://back-end-sound-waves.onrender.com/api",
});

export function getBoards() {
  return api.get("/boards").then(({ data }) => {
    console.log("this is data", data);
     return data;
  });
}
