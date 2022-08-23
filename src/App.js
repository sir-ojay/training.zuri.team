import { Routes, Route} from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/home";
import Enroll from "./Pages/Enroll/enroll"



function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
    </div>
  );
}

export default App;
