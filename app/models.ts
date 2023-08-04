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
