import logo from './logo.svg';
import './App.css';
import Navbar from './pages/HomeItems/Navbar/Navbar';
import Banner from './pages/HomeItems/Banner/Banner';
import Foods from './pages/HomeItems/Foods/Foods';
import Footer from './pages/HomeItems/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Banner></Banner>
     <Foods></Foods>
     <Footer></Footer>
    </div>
  );
}

export default App;
