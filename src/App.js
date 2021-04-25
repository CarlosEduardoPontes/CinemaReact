import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';
import Routes from './Routes';
import './App.css'

function App(){
  return(
    <BrowserRouter>
      <Header />

      <Routes />
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
