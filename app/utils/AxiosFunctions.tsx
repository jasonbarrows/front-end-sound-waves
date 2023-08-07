import axios from "axios";
import { Board, User, Wave } from "../models";

const api = axios.create({
  baseURL: "https://back-end-sound-waves.onrender.com/api",
});

export function getBoards(): Promise<{boards: Array<Board>}> {
  return api.get("/boards").then(({ data }) => {
    return data;
  });
}

export function getUsers(): Promise<{users: Array<User>}> {
  return api.get("/users").then(({ data }) => {
    console.log("this is data", data);
    return data
  });
}

export function getWaveById(wave_id: number): Promise<{wave: Wave}> {
  return api.get(`/waves/${wave_id}`).then((response) => {
    return response.data;
  });
}

export function getCommentsbyWaveId(wave_id: number): Promise<{comments: Array<Comment>}> {
  return api.get(`/waves/${wave_id}/comments`).then((response) => {
    return response.data;
  });
}