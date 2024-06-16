import React from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { gridAtom } from "../../store/atoms/grid";
import { isMaze, showSolution } from "../../store/atoms/mazeState";

export default function ResetGridButton() {
  const resetGridState = useResetRecoilState(gridAtom);
  const setIsRandomized = useSetRecoilState(isMaze);
  const setSolved = useSetRecoilState(showSolution);

  const resetGrid = () => {
    resetGridState();
    setIsRandomized(false);
    setSolved(false);
  };

  return <button onClick={resetGrid} className="hover:underline">Reset Grid</button>;
}
