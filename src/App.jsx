import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Header from "./components/Header";

const playerPromise = fetch("/players.json").then((res) => res.json());
function App() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="flex items-center justify-center mt-10">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <AvailablePlayers playerPromise={playerPromise} />
      </Suspense>
    </>
  );
}

export default App;
