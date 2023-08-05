import React from 'react';
import './App.css';
import Header from './compenents/layout/Public/Header';
import Footer from './compenents/layout/Public/Footer';
import PublicRoute from './routes/PublicRoute';

function App() {
  
  return (
    <>
        <Header/>

          <PublicRoute/>
         
        <Footer/>
         
    </>
  );
}

export default App;


