import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Topic from "./components/Topic";
import Topics from "./components/Topics";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <h1 className="pt-4 top-heading text-center fs-1 fw-semibold">
          180 DSA Cracker Striver SDE Sheet
        </h1>
      </div>
      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path="/:topicName" element={<Topic />} />
      </Routes>
    </>
  );
}

export default App;
