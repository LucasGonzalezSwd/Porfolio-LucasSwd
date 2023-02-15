import {Route, Routes} from 'react-router-dom'
import './App.css';
import '../../client/src/index.css'
import { Home } from './components/Home';
import {Projects} from './components/Projects'
import { AboutMe } from './components/AboutMe';
import { ContactMe } from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route exact path="/"  element={<Home />}/>
       <Route exact path="/projects" element={<Projects/>}/>
       <Route exact path="/about" element={<AboutMe/>}/>
       <Route exact path="/contact" element={<ContactMe/>}/>
       </Routes>
    </div>
  );
}

export default App;
