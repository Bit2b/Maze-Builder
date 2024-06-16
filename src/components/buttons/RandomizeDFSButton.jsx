import React from "react";
import { useRecoilState } from "recoil";
import useRandomizeDfs from "../../algorithms/randomizeDfs";
import { isMaze } from "../../store/atoms/mazeState";

export default function RandomizeDFSButton() {
  const [isRandomized, setIsRandomized] = useRecoilState(isMaze);
  const randomizeDfs = useRandomizeDfs();

  const handleRandomizeDfs = () => {
    if (!isRandomized) {
      randomizeDfs();
      setIsRandomized(true);
    }
  };

  return <button onClick={handleRandomizeDfs} className="hover:underline">Randomize DFS</button>;
}
