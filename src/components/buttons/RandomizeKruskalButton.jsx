import React from "react";
import { useRecoilState } from "recoil";
import useRandomizeKruskal from "../../algorithms/randomizeKruskal";
import { isMaze } from "../../store/atoms/mazeState";

export default function RandomizeKruskalButton() {
  const [isRandomized, setIsRandomized] = useRecoilState(isMaze);
  const randomizeKruskal = useRandomizeKruskal();

  const handleRandomizeKruskal = () => {
    if (!isRandomized) {
      randomizeKruskal();
      setIsRandomized(true);
    }
  };

  return <button onClick={handleRandomizeKruskal} className="hover:underline">Randomize Kruskal</button>;
}
