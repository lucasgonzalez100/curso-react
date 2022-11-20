import React from 'react';
import './App.css';
import Navbar from "./componentes/Navbar";
import Carrousel from "./componentes/Carrousel" ;
import Tarjetas from "./componentes/Tarjetas" ;
import Login from "./componentes/Login" ;
import ItemListContainer from "./componentes/ItemListContainer";
import Footer from "./componentes/Footer" ;

function App() {

  return (
    <div>
        <Navbar/>
        <Carrousel/>
        <ItemListContainer arenga = {"vamos argentina"}/>
        <Tarjetas/>
        <Login/>
        <Footer/>
    </div>
  );
}

export default App;
