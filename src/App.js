import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar/MyNavbar';
import { Home } from './Pages/Home';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <MyNavbar></MyNavbar> 
      <Home/>
      
    </div>
  );
}

export default App;
