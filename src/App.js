import './App.css';

import {Routes,Route} from "react-router-dom";
import { Home } from './pages/home/Home';
import { Profile } from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeName" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
