import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const playerPromise = fetch("/players.json").then((res) => res.json());
function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Header />
      <div className='flex justify-between items-center px-5 mb-5 w-11/12 mx-auto mt-10'>
      {
        toggle? <h2 className='font-bold text-2xl'>Available Players </h2> : <h2 className='font-bold text-2xl'>Selected Players</h2>
      }
        <div className='space-x-2'>
            <button onClick={() => setToggle(true)} className={`btn ${toggle===true? "bg-[#E7FE29]" : ""}`}>Available</button>
            <button onClick={() => setToggle(false)} className={`btn ${toggle===false? "bg-[#E7FE29]" : ""}`}>Selected (<span>0</span>)</button>
        </div>
      </div>
      {
        toggle === true?
        <Suspense
          fallback={
            <div className="flex items-center justify-center mt-10">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <AvailablePlayers playerPromise={playerPromise} />
        </Suspense> : <SelectedPlayers/>
      } 
      <Newsletter />
      <Footer/>
    </>
  );
}

export default App;
