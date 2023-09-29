import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Add from '../../components/Add/Add';
import CoffeeShopsPage from '../CoffeeShopsPage/CoffeeShopsPage';
import CoffeeShopDetailPage from '../CoffeeShopDetailPage/CoffeeShopDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Login from '../Auth/LoginPage';
import Register from '../Auth/Register';
import { UserContextProvider } from '../../context/UserContext';
import { BrowserRouter } from 'react-router-dom';


export default function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
    <main className=" font-titleFont bg-gray-100 ">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/coffeeshops" element={<CoffeeShopsPage />} />
          <Route path="/create" element={<Add />} />
          <Route path="/details/:id" element={<CoffeeShopDetailPage />} />
        </Routes>
        < Footer />
    </main>
      </UserContextProvider>
    </BrowserRouter>
  );
}
