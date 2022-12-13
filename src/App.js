import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'; 
import NavBar from "./componentes/NavBar";
import Carrousel from "./componentes/Carrousel" ;
import Tarjetas from "./componentes/Tarjetas" ;
import Login from "./componentes/Login" ;
import ItemListContainer from "./componentes/ItemListContainer";
import Footer from "./componentes/Footer" ;
import ItemDitailContainer from './componentes/ItemDitailContainer';
import Error404 from "./componentes/Error404";


function App() {

  return (
    
    <BrowserRouter>
      <NavBar/>
      <Carrousel/>
      <Tarjetas/>
           <Routes>
           <Route path={'/'} element={<ItemListContainer/>  } />
           <Route path={'/category/:id'} element={<ItemDitailContainer/>  } />
           <Route path={'/item/:id'} element={<ItemDitailContainer/>  } /> 
           <Route path={'*'} element={<Error404/>}/> 
           </Routes>
       <Login/>
       <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
