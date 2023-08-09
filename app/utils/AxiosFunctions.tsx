import axios from "axios";
import { Board, User, Wave, Comment } from "../models";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
});

export function getAllWaves(board_slug?: string): Promise<{ waves: Wave[] }> {
  let queryStr = "/waves";
  board_slug ? (queryStr += `?board=${board_slug}`) : null;
  return api.get(queryStr).then(({ data }) => {
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
    return data;
  });
}

export function createWave(formData: FormData): Promise<{ wave: Wave }> {
  return api
    .post("/waves", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(({ data }) => {
      return data;
    });
}

export function postComment(
  wave_id: number,
  username: string,
  comment: string
): Promise<{ comment: Comment }> {
  return api
    .post(`/waves/${wave_id}/comments`, { username, comment })
    .then(({ data }) => {
      return data;
    });
}
