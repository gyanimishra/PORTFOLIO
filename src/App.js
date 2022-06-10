
import About from './About';
import './App.css';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Project from './Project';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Project/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
