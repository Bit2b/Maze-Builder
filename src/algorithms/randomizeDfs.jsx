import { useRecoilState, useRecoilValue } from "recoil";
import { gridAtom, gridDimensionsAtom } from "../store/atoms/grid";

export default function useRandomizeDfs() {
    const [grid, setGrid] = useRecoilState(gridAtom);
    const {height,width}=useRecoilValue(gridDimensionsAtom);
  
    const randomizeDfs = () => {
      const newGrid = grid.map((row) =>
        row.map((cell) => ({
          ...cell,
          walls: { ...cell.walls },
          paths: { ...cell.paths },
        }))
      );

      // Create a visited array
      const visited = Array.from({ length: height }, () => Array(width).fill(false));
  
      const isInsideGrid = (x, y) =>
        x >= 0 && x < height && y >= 0 && y < width;
  
      const getRandomNumber = (n) => Math.floor(Math.random() * n);
  
      const getDirection = (i) => {
        const directions = ["top", "bottom", "right", "left"];
        const oppositeDirections = ["bottom", "top", "left", "right"];
        return [directions[i], oppositeDirections[i]];
      };
  
      const stack = [{ x: 0, y: 0 }];
      const dx = [-1, 1, 0, 0];
      const dy = [0, 0, 1, -1];
      visited[0][0] = true;

      while (stack.length) {
        const curr = stack.pop();
        const unVisited = [];
        for (let directionIndex = 0; directionIndex < 4; directionIndex++) {
          const x = curr.x + dx[directionIndex];
          const y = curr.y + dy[directionIndex];
          if (!isInsideGrid(x, y)) continue;
          if (visited[x][y]) continue;
          unVisited.push({ x, y, directionIndex });
        }
  
        if (unVisited.length === 0) continue;
  
        const randomNumber = getRandomNumber(unVisited.length);
        const { x, y, directionIndex } = unVisited[randomNumber];
        const [currentDirection, nextDirection] = getDirection(directionIndex);
  
        stack.push(curr);
        stack.push({ x, y });
        visited[x][y] = true;
        newGrid[curr.x][curr.y].walls[currentDirection] = 0;
        newGrid[x][y].walls[nextDirection] = 0;
      }
      setGrid(newGrid);
    };
  
    return randomizeDfs;
  }