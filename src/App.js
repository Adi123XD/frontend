import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Translate from './components/translate/Translate';
import Hero from './components/hero/Hero';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/translate' element={<Translate/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
