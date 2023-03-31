import React, {  } from "react"
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import "./App.css";
import LoginPage from "./Components/LoginPage";
import StopWatch from "./Components/StopWatch";


function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StopWatch/>}/>
        </Routes>

        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
