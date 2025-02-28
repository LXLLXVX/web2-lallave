import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home"
import Clubes from './pages/clubes/Clubes';
import './App.css'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/clubes" element={<Clubes/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
