import { RecoilRoot } from "recoil";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-start justify-center w-full h-screen bg-gray-700">
      <RecoilRoot>
        <Navbar />
        <Grid />
      </RecoilRoot>
    </div>
  );
}

export default App;
