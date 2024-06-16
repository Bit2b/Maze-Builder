import { atom, selector } from "recoil";

// Define gridDimensionsAtom first
export const gridDimensionsAtom = atom({
  key: "gridDimensionsAtom",
  default: {
    height: 30,
    width: 50,
  },
});

// Memoized selector for getting initial grid
const getInitialGrid = selector({
  key: "getInitialGrid",
  get: ({ get }) => {
    const { height, width } = get(gridDimensionsAtom);
    const initialGrid = [];
    for (let row = 0; row < height; row++) {
      const currentRow = [];
      for (let col = 0; col < width; col++) {
        currentRow.push({ 
          row,
          col,
          walls: { top: 1, bottom: 1, right: 1, left: 1 },
          paths: { top: 0, bottom: 0, right: 0, left: 0 },
        });
      }
      initialGrid.push(currentRow);
    }
    return initialGrid;
  },
});

// Define gridAtom with default as getInitialGrid
export const gridAtom = atom({
  key: "gridAtom",
  default: getInitialGrid,
});

export const gridRefAtom = atom({
  key: "gridRefAtom",
  default: null,
});
