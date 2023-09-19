
import './App.css';
import Header from './Containers/Header';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductList from './Containers/ProductList';
import ProductDetils from './Containers/ProductDetils';
import Login from './Containers/Login';
import { ToastContainer } from 'react-toastify';
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
    <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable={false}
          pauseOnHover
        />
     
    </div>
  );
}

export default App;
