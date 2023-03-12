import './App.css';
import LoginFrom from './component/LoginFrom';
import ShopPage from './component/shopPage';
import { Routes, Route } from "react-router-dom";
import DetailPage from './component/detailPage';
import BuyNow from './component/buyNow';
import NoPage from './component/NoPage';
  function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<LoginFrom />} /> 
        <Route path="*" element={<NoPage/>} />
        <Route path="/page/:id" element={<ShopPage/>} />
        <Route path="/detail/:id" element={<DetailPage/>} />
        <Route path="/buyNow" element={<BuyNow/>} />
      </Routes>
    </div>
  );
}

export default App;
