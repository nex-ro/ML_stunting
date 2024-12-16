import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Predict from './Page/Predict'
import Main from "./Page/Main";
import HomePage from "./Page/HomePage";
const App = () => {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/predict" element={<Predict/>} />
  
        </Routes>
      </Router>
    );
};

export default App;
