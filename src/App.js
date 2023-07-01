import './App.css';

import {Routes,Route} from "react-router-dom";
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeName" element={<h1>This is recipeName</h1>} />
      </Routes>
    </div>
  );
}

export default App;
