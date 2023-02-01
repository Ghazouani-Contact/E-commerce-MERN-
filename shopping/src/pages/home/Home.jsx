import React from 'react';
import Navbar from '../../Components/Navbar';
import Announcement from '../../Components/Announcement';
import Slider from '../../Components/Slider';
import Categories from '../../Components/Categories';
import Products from '../../Components/Products';
import Newsletter from '../../Components/Newsletter';
import Footer from '../../Components/Footer';
import styled from "styled-components";
const Categ=styled.h1 `
text-align:center
`
const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categ>Nos Catégories</Categ>
      <Categories/>
      <Categ>Nos Produits</Categ>
      <Products />
      <Newsletter/>
      <Footer/>
      
    </div>
  )
}

export default Home;
