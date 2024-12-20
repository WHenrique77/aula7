import React from 'react'; 
import './App.css'; 
import { Navbar, NavbarBrand } from 'reactstrap'; // Correct import
import Menu from './components/MenuComponent';

function App() { 
  return ( 
    <div className="App"> 
      <Navbar dark color="primary"> 
        <div className="container"> 
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand> 
          <div>Aluno: Brenno Elimar </div> 
        </div> 
      </Navbar> 
      <Menu />
    </div> 
  ); 
}

export default App;
