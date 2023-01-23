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
        <h1 className="top-heading text-center pt-4">180 DSA Cracker</h1>
      </div>
      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path="/:topicName" element={<Topic />} />
      </Routes>
    </>
  );
}

export default App;
