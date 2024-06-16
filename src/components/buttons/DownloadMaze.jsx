import React from "react";
import { useRecoilValue } from "recoil";
import domtoimage from "dom-to-image";
import { gridRefAtom } from "../../store/atoms/grid";

export default function DownloadMaze() {
  const gridRef = useRecoilValue(gridRefAtom);

  function saveDivAsImage() {
    if (gridRef.current) {
      domtoimage
        .toPng(gridRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "grid.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error("Oops, something went wrong!", error);
        });
    }
  }

  return <button onClick={saveDivAsImage} className="hover:underline">Download</button>;
}
