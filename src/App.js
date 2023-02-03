// import logo from './logo.svg';
import { Helmet } from 'react-helmet';
import WebFont from 'webfontloader';
import './App.css';
import AboutMe from './components/Aboutme';
import Header from "./components/Header";
import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";
import Portafolio from "./components/portafolio";

WebFont.load({
  google: {
    families: ['Work Sans:400, 500, 700', 'sans-serif']
  }
});

function App() {
  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Anthony Serquén | Portafolio Web 2023</title>
          <link rel="icon" href="img/favicon.ico" />
          <meta name="description" content="Portafolio"/>
          <link rel="apple-touch-icon" href="img/android-chrome-512x512.png" />
      </Helmet>
      <Header/>
      <AboutMe/>
      <Habilidades/>
      <Portafolio/>
      <Contacto/>
    </div>
  );
}

export default App;
