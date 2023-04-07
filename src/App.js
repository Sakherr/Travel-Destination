import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import TourDetails from './components/tourDetails/TourDetails';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const data = require('./data/data.json');


function App() {

  return (  
    <>
    <Header/>
    <div>
      <Routes>
        
        <Route path = '/' element = {<Home data = {data}/>}/>
        
        <Route path = '/city/:id' element = {<TourDetails/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;