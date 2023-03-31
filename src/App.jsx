import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Topic from "./components/Topic";
import Topics from "./components/Topics";
import Footer from "./components/Footer";
import ManageContext from "./components/context/ManageContext";
import { useContext } from "react";

function App() {
  const { darkMode } = useContext(ManageContext);

  return (
    <div className={`${darkMode ? "bg-dark" : "bg-white"} `}>
      <Navbar />
      <div className="App">
        <h1
          className={`pt-4 top-heading text-center fs-1 fw-semibold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          180 DSA Cracker Striver SDE Sheet
        </h1>
      </div>
      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path="/:topicName" element={<Topic />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
