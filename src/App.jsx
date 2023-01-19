import "./App.css";
import List from "./components/Topics";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="p-5">
          <h1 className="text-center">180 DSA Cracker</h1>
          <p className="text-center fs-5">Your Gateway to crack DSA 🔥</p>
          <p className="text-center fs-5">Start Solving</p>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
