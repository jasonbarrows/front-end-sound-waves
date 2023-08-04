export interface Wave {
  wave_id: number;
  title: string;
  wave_url: string;
  created_at: string;
  user_id: number;
  board_id: number;
  likes: number;
  transcript: string;
  censor: boolean;
}

export interface Board {
  board_slug: string;
  board_name: string;
  description: string;
  created_at: string;
  username: string;
}

export interface User {
  username: string;
  email: string;
  avatar_url: string;
  password: string;
}
