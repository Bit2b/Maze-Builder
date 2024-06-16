import React from "react";
import RandomizeDFSButton from "./buttons/RandomizeDFSButton";
import RandomizeKruskalButton from "./buttons/RandomizeKruskalButton";
import SolveButton from "./buttons/SolveButton";
import ResetGridButton from "./buttons/ResetGridButton";
import DownloadMaze from "./buttons/DownloadMaze";
import Logo from "./buttons/Logo";

export default function Navbar() {
  return (
    <div className="flex flex-col bg-gray-900 gap-6 p-8 text-gray-300 text-base font-semibold shadow-md fixed top-0 left-0 bottom-0">
      <Logo />
      <RandomizeDFSButton />
      <RandomizeKruskalButton />
      <SolveButton />
      <ResetGridButton />
      <DownloadMaze />
    </div>
  );
}
