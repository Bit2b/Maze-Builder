import { useRecoilState, useRecoilValue } from "recoil";
import { gridAtom, gridDimensionsAtom } from "../store/atoms/grid";

//https://cp-algorithms.com/data_structures/disjoint_set_union.html
class DisjointSetUnion {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.parent = {};
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const key = `${i},${j}`;
        this.parent[key] = key;
      }
    }
  }

  findSet(element) {
    if (this.parent[element] !== element) {
      this.parent[element] = this.findSet(this.parent[element]);
    }
    return this.parent[element];
  }

  unionSet(edge) {
    const keyU = `${edge.cellA.x},${edge.cellA.y}`;
    const keyV = `${edge.cellB.x},${edge.cellB.y}`;
    const rootU = this.findSet(keyU);
    const rootV = this.findSet(keyV);
    if (rootU !== rootV) {
      this.parent[rootU] = rootV;
    }
  }

  isInSameSet(edge) {
    const keyU = `${edge.cellA.x},${edge.cellA.y}`;
    const keyV = `${edge.cellB.x},${edge.cellB.y}`;
    return this.findSet(keyU) === this.findSet(keyV);
  }
}

//The Fisher-Yates shuffle 
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function useRandomizeKruskal() {
  const [grid, setGrid] = useRecoilState(gridAtom);
  const { height, width } = useRecoilValue(gridDimensionsAtom);
  const randomizeKruskal = () => {
    const newGrid = grid.map((row) =>
      row.map((cell) => ({
        ...cell,
        walls: { ...cell.walls },
        paths: { ...cell.paths },
      }))
    );
    let edges = [];
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (i != height - 1)
          edges.push({ cellA: { x: i, y: j }, cellB: { x: i + 1, y: j } });
        if (j != width - 1)
          edges.push({ cellA: { x: i, y: j }, cellB: { x: i, y: j + 1 } });
      }
    }
    edges = shuffle(edges);

    const dsu = new DisjointSetUnion(height, width);
    edges.forEach((edge) => {
      if (!dsu.isInSameSet(edge)) {
        dsu.unionSet(edge);
        const { cellA, cellB } = edge;
        if (cellA.x === cellB.x) {
          newGrid[cellA.x][cellA.y].walls.right = false;
          newGrid[cellB.x][cellB.y].walls.left = false;
        } else {
          newGrid[cellA.x][cellA.y].walls.bottom = false;
          newGrid[cellB.x][cellB.y].walls.top = false;
        }
      }
    });
    setGrid(newGrid);
  };
  return randomizeKruskal;
}
