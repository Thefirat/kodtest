import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Employees from './pages/Employees';
import Home from './pages/Home';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  </div>
  );
}

export default App;
