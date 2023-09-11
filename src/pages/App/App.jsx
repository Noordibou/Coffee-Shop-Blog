import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Add from '../../components/Add/Add';
import CoffeeShopsPage from '../CoffeeShopsPage/CoffeeShopsPage';
import CoffeeShopDetailPage from '../CoffeeShopDetailPage/CoffeeShopDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';
import './App.css';
import Footer from '../Footer/Footer';


export default function App() {
  return (
    <main className=" font-titleFont bg-gray-100 ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffeeshops" element={<CoffeeShopsPage />} />
        <Route path="/createCS" element={<Add />} />
        <Route path="/details/:id" element={<CoffeeShopDetailPage />} />
      </Routes>
      < Footer />
    </main>
  );
}
