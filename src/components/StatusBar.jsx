import { useRecoilValue } from "recoil";
import { gridDimensionsAtom } from "../store/atoms/grid";

export function StatusBar() {
  const dimensions = useRecoilValue(gridDimensionsAtom);

  return (
    <div className={`h-12 font-light font-mono text-sm pr-4 flex justify-end gap-4 text-green-300 bg-gray-800 w-full`}>
      <div>{`row : ${dimensions.height}`}</div>
      <div>{`col : ${dimensions.width}`}</div>
    </div>
  );
}
