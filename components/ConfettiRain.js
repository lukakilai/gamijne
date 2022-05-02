import Confetti from "react-confetti";

export default function ConfettiRain() {
  const [ww, wh] = [window.innerWidth, window.innerHeight];

  return (
    <Confetti
      width={ww}
      height={wh}
      numberOfPieces={200}
      opacity={0.5}
      // tweenDuration={20}
      // recycle={false}
    />
  );
}
