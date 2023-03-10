import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Tech from './components/Tech'
import Bio from './components/Bio'
import Projects from './components/Projects'




function App() {
  return (
    <div className="App">
      <div className="Bio">
        <Header />
        <Bio />
      </div>
      <Tech />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;
