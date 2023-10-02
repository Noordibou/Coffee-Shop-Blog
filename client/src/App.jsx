import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Add from './components/Add';
import CoffeeShopsPage from './pages/CoffeeShopsPage';
import CoffeeShopDetailPage from './pages/CoffeeShopDetailPage';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Login from './pages/Auth/LoginPage';
import Register from './pages/Auth/Register';
import { UserContextProvider } from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';
import MyBlogs from './pages/MyBlogs';


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
          <Route path="/myblogs/:id" element={<MyBlogs/>}/>
        </Routes>
        < Footer />
    </main>
      </UserContextProvider>
    </BrowserRouter>
  );
}
