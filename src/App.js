import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Home from './component/Home';
import About from './pages/About';
import Footer from './component/Footer';
import Creative from './pages/creative';
import Signature from './pages/Signature';
import Product from './component/Product';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Upload from './pages/Upload';
import Getdelete from './pages/Getdelete';
import Edit from './pages/Edit';
import Register from './pages/Register';
import Login from './pages/Login';
import Validation from './pages/Validation';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/creative" element={<Creative/>} />
        <Route path="/signature" element={<Signature/>} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/n" element={<Upload/>}/>
        <Route path='/m' element={<Getdelete/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
           <Route path='/validation' element={<Validation/>}/>
      </Routes>
           <Footer/>
      </BrowserRouter>

      {/* <BrowserRouter>

      </BrowserRouter> */}


    {/* <Header/>
    <Home/>
    <Footer/>
    <About/>
    <Footer/>
    <Creative/>
    <Footer/>
    <Signature/>
    <Footer/> */}
    </div>
  );
}

export default App;
