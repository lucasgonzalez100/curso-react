import React from 'react';
import './App.css';
import NavBar from "./componentes/NavBar";
import Carrousel from "./componentes/Carrousel" ;
import Tarjetas from "./componentes/Tarjetas" ;
import Login from "./componentes/Login" ;
import ItemListContainer from "./componentes/ItemListContainer";
import Footer from "./componentes/Footer" ;

function App() {

  return (
    <div>
        <NavBar/>
        <Carrousel/>
        <ItemListContainer />
        <Tarjetas/>
        <Login/>
        <Footer/>
    </div>
  );
}

export default App;
