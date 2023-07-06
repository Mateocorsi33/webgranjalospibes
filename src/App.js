import './App.css';
import Header from "../src/Components/Header/index";
import Main from "../src/Components/Main/index";
import QuienesSomos from "./Components/QuienesSomos/index.jsx";
import Contacto from "../src/Components/Contacto";
import Padrinos from "../src/Components/Padrinos";
import Donar from "../src/Components/Donar";
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/quienes-somos' element={<QuienesSomos />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/padrinos' element={<Padrinos />}/>
        <Route path='/donar' element={<Donar />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
