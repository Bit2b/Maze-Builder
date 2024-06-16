import { useRecoilValue } from "recoil";
import { gridDimensionsAtom } from "../store/atoms/grid";
import React from "react";
import { showSolution } from "../store/atoms/mazeState";
import {
  TopToRight,
  TopToLeft,
  LeftToRight,
  LeftToBottom,
  RightToBottom,
  TopToBottom,
} from "./icons/DirectionIcon";
import { StartIcon,EndIcon } from "./icons/StartIcon";

export function Node({ row, col, walls, paths }) {
  const { height, width } = useRecoilValue(gridDimensionsAtom);
  const nodeDimensions = { width: `${100 / width}%`, height: "24px" };
  const showPath = useRecoilValue(showSolution);
  return (
    <div
      id={`node-${row}-${col}`}
      className={`inline-block border border-solid -my-1
          ${walls.top ? "border-t-rose-100" : "border-t-gray-700"}
          ${walls.bottom ? "border-b-rose-100" : "border-b-gray-700"}
          ${walls.right ? "border-r-rose-100" : "border-r-gray-700"}
          ${walls.left ? "border-l-rose-100" : "border-l-gray-700"}
          ${col === 0 ? "border-l-2" : ""}
          ${row === 0 ? "border-t-2" : ""}
          ${col === width - 1 ? "border-r-2" : ""}
          ${row === height - 1 ? "border-b-2" : ""}
          `}
      style={nodeDimensions}
    >
      {showPath ? (
        <div>
          {paths.top && paths.bottom ? <TopToBottom /> : null}
          {paths.left && paths.right ? <LeftToRight /> : null}
          {paths.top && paths.right ? <TopToRight /> : null}
          {paths.top && paths.left ? <TopToLeft /> : null}
          {paths.bottom && paths.left ? <LeftToBottom /> : null}
          {paths.bottom && paths.right ? <RightToBottom /> : null}
        </div>
      ) : null}
      {row === 0 && col === 0 ? <StartIcon />: null}
      {row === height - 1 && col === width - 1 ? (
        <EndIcon/>
      ) : null}
    </div>
  );
}
