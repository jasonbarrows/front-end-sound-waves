export interface Wave {
  wave_id: number;
  title: string;
  wave_url: string;
  created_at: string;
  username: string;
  board_slug: string;
  likes: number;
  transcript: string;
  censor: boolean;
  comment_count: number;
  avatar_url: string;
}

export interface Board {
  board_slug: string;
  board_name: string;
  description: string;
  created_at: string;
  username: string;
  avatar_url: string;
}

export interface User {
  username: string;
  email: string;
  avatar_url: string;
  password: string;
}

export interface Comment {
  comment_id: number;
  comment: string;
  created_at: string;
  likes: number;
  username: string;
  wave_id: number;
}
