import axios from "axios";
import { Board, User, Wave, Comment } from "../models";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
});

export function getAllWaves(): Promise<{ waves: Wave[] }> {
  return api.get("/waves").then(({ data }) => {
    return data;
  });
}

export function getBoards(): Promise<{ boards: Array<Board> }> {
  return api.get("/boards").then(({ data }) => {
    return data;
  });
}

export function getUsers(): Promise<{ users: Array<User> }> {
  return api.get("/users").then(({ data }) => {
    console.log("this is data", data);
    return data;
  });
}

export function getWaveById(wave_id: number): Promise<{ wave: Wave }> {
  return api.get(`/waves/${wave_id}`).then(({ data }) => {
    return data;
  });
}

export function getCommentsbyWaveId(
  wave_id: number
): Promise<{ comments: Comment[] }> {
  return api.get(`/waves/${wave_id}/comments`).then(({ data }) => {
    console.log(data);
    return data;
  });
}

export function createWave(formData: FormData): Promise<object> {
  return api
    .post("/waves", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
      return response;
    });
}
