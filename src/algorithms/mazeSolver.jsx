import { useRecoilState, useRecoilValue } from "recoil";
import { gridAtom, gridDimensionsAtom } from "../store/atoms/grid";
import { useState } from "react";

export default function useMazeSolver() {
  const [grid, setGrid] = useRecoilState(gridAtom);
  const { height, width } = useRecoilValue(gridDimensionsAtom);
  const [destination, setDestination] = useState({
    x: height - 1,
    y: width - 1,
  });

  const mazeSolver = () => {
    const newGrid = grid.map((row) =>
      row.map((cell) => ({
        ...cell,
        walls: { ...cell.walls },
        paths: { ...cell.paths },
      }))
    );

    const isInsideGrid = (x, y) => x >= 0 && x < height && y >= 0 && y < width;

    const getDirection = (i) => {
      const directions = ["top", "bottom", "right", "left"];
      const oppositeDirections = ["bottom", "top", "left", "right"];
      return [directions[i], oppositeDirections[i]];
    };

    const visited = Array.from({ length: height }, () =>
      Array(width).fill(false)
    );
    const parent = Array.from({ length: height }, () =>
      Array(width).fill({ x: -1, y: -1 })
    );

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, 1, -1];
    const queue = [];

    queue.push({ x: 0, y: 0 });
    visited[0][0] = true;

    while (queue.length > 0) {
      let current = queue.shift();

      for (let directionIndex = 0; directionIndex < 4; directionIndex++) {
        const x = current.x + dx[directionIndex];
        const y = current.y + dy[directionIndex];
        if (isInsideGrid(x, y)) {
          const [currentDirection, nextDirection] =
            getDirection(directionIndex);
          if (newGrid[current.x][current.y].walls[currentDirection]) continue;
          if (!visited[x][y]) {
            queue.push({ x, y });
            visited[x][y] = true;
            parent[x][y] = { x: current.x, y: current.y };
          }
        }
      }
    }

    // Trace back the path from destination to start
    let current = destination;
    while (current.x !== -1 && current.y !== -1) {
      const prev = parent[current.x][current.y];
      if (prev.x === -1 && prev.y === -1) break;

      const direction = {
        x: current.x - prev.x,
        y: current.y - prev.y,
      };

      const directionMap = {
        "-1,0": ["top", "bottom"],
        "1,0": ["bottom", "top"],
        "0,-1": ["left", "right"],
        "0,1": ["right", "left"]
      };
      let currentDirection, nextDirection;
      [currentDirection, nextDirection] = directionMap[`${direction.x},${direction.y}`];      

      newGrid[current.x][current.y].paths[nextDirection] = true;
      newGrid[prev.x][prev.y].paths[currentDirection] = true;

      current = prev;
    }

    setGrid(newGrid);
  };
  return mazeSolver;
}
