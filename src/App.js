import logo from './logo.svg';
import './App.css';

import Conversor from './componente/Conversor';

function App() {
  return (
    <div className="App">
      <h1>Conversor de moeda</h1>
    <div className="Linha"> 
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
    </div>  
    <div className="Linha"> 
      <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
    </div>  
    </div>
  );
}

export default App;
