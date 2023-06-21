
import './App.css';
import {React} from 'react';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';

function App() {
  return (
   <div className="App">
    <h1>Hello from React</h1>
    <NavBar/>

    <QuantityPicker/>
    <QuantityPicker/>
    <QuantityPicker/>
    <QuantityPicker/>

    <Footer/>
    </div>
  
   );
}

export default App;
