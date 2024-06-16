import { useRecoilValue, useSetRecoilState } from "recoil";
import { gridAtom, gridRefAtom } from "../store/atoms/grid";
import React, { useRef, useEffect } from "react";
import { Node } from "./Node";
import { StatusBar } from "./StatusBar";
import { isMaze } from "../store/atoms/mazeState";
import { Tutorial } from "./Tutorial";

const Grid = () => {
  const grid = useRecoilValue(gridAtom);
  const setGridRef = useSetRecoilState(gridRefAtom);
  const localGridRef = useRef();
  const isRandomize = useRecoilValue(isMaze);
  useEffect(() => {
    setGridRef(localGridRef);
  }, [setGridRef]);

  return (
    <div className="pl-56 flex flex-col w-full">
      <StatusBar />
      <div ref={localGridRef} className="p-4 bg-gray-700">
        {isRandomize ? (
          <div>
            {grid.map((row) =>
              row.map((node) => (
                <Node
                  key={`${node.row}-${node.col}`}
                  row={node.row}
                  col={node.col}
                  walls={node.walls}
                  paths={node.paths}
                />
              ))
            )}
          </div>
        ) : <Tutorial/>
        }
      </div>
    </div>
  );
};

export default Grid;
