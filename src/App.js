// import logo from './logo.svg';
import { Helmet } from 'react-helmet';
import WebFont from 'webfontloader';
import './App.css';
import Contenido from './components/Contenido';
import Header from "./components/Header";

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
      </Helmet>
      <Header/>
      <Contenido/>
    </div>
  );
}

export default App;
