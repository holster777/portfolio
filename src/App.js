// Dependent imports

import { Routes, Route } from 'react-router-dom';
import '../src/App.css'


// Component / page imports

import Home from './Components/Home/Home.jsx';

// Main Function

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
    </div>
  );
}

export default App;
