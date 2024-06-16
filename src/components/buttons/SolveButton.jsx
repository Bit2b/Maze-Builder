import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useMazeSolver from "../../algorithms/mazeSolver";
import { isMaze, showSolution } from "../../store/atoms/mazeState";

export default function SolveHidePathButton() {
  const isRandomized = useRecoilValue(isMaze);
  const [showPath, setShowPath] = useRecoilState(showSolution);
  const [solved,setSolved]=useState(false);
  const mazeSolver = useMazeSolver();

  function handleMazeSolver() {
    if(solved){
      setShowPath(true);
      return;
    }
    if (isRandomized && !showPath) {
      mazeSolver();
      setShowPath(true);
      setSolved(true);
    }
  }

  function handleHidePath() {
    if (isRandomized && showPath) {
      setShowPath(false);
    }
  }

  useEffect(()=>{
    if(!isRandomized)
      setSolved(false);
  },[isRandomized])

  return (
    <>
      {!showPath && <button onClick={handleMazeSolver} className="hover:underline">Solve</button>}
      {showPath && <button onClick={handleHidePath} className="hover:underline">Hide Path</button>}
    </>
  );
}
