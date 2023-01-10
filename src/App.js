// import logo from './logo.svg';
import WebFont from 'webfontloader';
import './App.css';
import Contenido from './components/Contenido';
import Footer from './components/Footer';
import Header from "./components/Header";

WebFont.load({
  google: {
    families: ['Work Sans:400, 500, 700', 'sans-serif']
  }
});

function App() {
  return (
    <div className="App">
      <Header/>
      <Contenido/>
      <Footer />
    </div>
  );
}

export default App;
