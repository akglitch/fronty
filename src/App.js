import './App.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
function App() {
  return (
    <div >

      <Nav />
      <div className='background'>
        <Hero />
      </div>

    </div>
  );
}

export default App;
