import { Container } from '@nextui-org/react';
import './App.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Sate from './Components/Sate';

function App() {
  return (
    <div >
   
      <Nav />
        <Hero />
      <Projects />
      <Sate />

    </div>
  );
}

export default App;
