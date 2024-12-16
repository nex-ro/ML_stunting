import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Predict from './Page/Predict'
import Main from "./Page/Main";
const App = () => {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/predict" element={<Predict/>} />
  
        </Routes>
      </Router>
    );
};

export default App;
