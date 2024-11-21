import React from 'react'; 
import './App.css'; 
import { Navbar, NavbarBrand } from 'reactstrap'; // Correct import

function App() { 
  return ( 
    <div className="App"> 
      <Navbar dark color="primary"> 
        <div className="container"> 
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand> 
          <div>Aluno: Wagner Henrique</div> 
        </div> 
      </Navbar> 
    </div> 
  ); 
}

export default App;
