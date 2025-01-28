

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import 'animate.css';
import Scroll from './components/common/Scroll';


function App() {
  return (
    <div className="App">
             <BrowserRouter>
             <Scroll/>
        
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
