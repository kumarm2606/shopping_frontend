
import './App.css';
import Header from './Containers/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductList from './Containers/ProductList';
import ProductDetils from './Containers/ProductDetils';
import Login from './Containers/Login';
function App() {
  return (
    <div className="App">
 
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/'  element={<ProductList/>}/>
          <Route path="/productDetil/:productId"  element={<ProductDetils/>}/>
          <Route path="/login"  element={<Login/>}/>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
