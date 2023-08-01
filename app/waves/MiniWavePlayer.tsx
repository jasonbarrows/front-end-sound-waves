interface Props {
  wave_url: string;
}

function MiniWavePlayer({ wave_url }: Props) {
  return <audio controls src={wave_url}></audio>;
}

export default MiniWavePlayer;
