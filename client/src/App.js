import {Route, Routes} from 'react-router-dom'
import '../../client/src/index.css'
import { Home } from './components/Home';
import {Projects} from './components/Projects'
import { AboutMe } from './components/AboutMe';
import { ContactMe } from './components/ContactMe';
import { Skills } from './components/Skills';


function App() {
  return (
    <div className="App">
      <Routes>
       <Route exact path="/"  element={<Home />}/>
       <Route  path="/projects" element={<Projects/>}/>
       <Route  path="/about" element={<AboutMe/>}/>
       <Route  path="/contact" element={<ContactMe/>}/>
       <Route  path="/skills" element={<Skills/>}/>
      
       </Routes>
    </div>
  );
}

export default App;
