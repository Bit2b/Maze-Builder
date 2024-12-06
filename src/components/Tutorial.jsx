export function Tutorial() {
  return (
    <div className="text-white text-center font-mono text-2xl font-semibold tracking-wide">
      Choose An algorithm to Generate A random Maze
      <div className="m-4 mt-10 flex flex-1 justify-between gap-10">
        <div>
          <img src="./maze-tutorial.png" alt="tutorial image" />
          <p className="text-xl font-thin font-mono">
           A maze genereated by Randomized Kruskal's Algorithm`
          </p>
        </div>
        <div>
          <img src="./solution-tutorial.png" alt="solution" />
          <p className="text-xl font-thin font-mono">Solution of the maze</p>
        </div>
      </div>
      <div className="text-sm font-light pt-4 pb-px bg-gray-800 text-white  border-solid rounded-sm fixed right-0 bottom-0 left-56">
        <div>
          Click to Learn More About the algorithms
          <div>
            <a
              href="https://en.wikipedia.org/wiki/Maze_generation_algorithm"
              className="font-light py-2 px-4 rounded inline-block text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maze Generation
            </a>

            <a
              href="https://en.wikipedia.org/wiki/Maze-solving_algorithm"
              className=" font-light py-2 px-4 rounded inline-block text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maze Solution
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
