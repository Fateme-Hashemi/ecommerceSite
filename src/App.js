import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from 'react';


//components
import Cart from './common/cart/Cart';
import Pages from './pages/Pages';
import Data from "./components/mainpage/FlashDeals/Data";
import Header from './components/header/Header';


//context
import ProductProvider from './components/mainpage/FlashDeals/context/ProductProvider';
import CartContextProvider from './components/mainpage/FlashDeals/context/CartContextProvider';


const App = () => {
  const { productItems } = Data;



  return (
    <ProductProvider productItems={productItems}>
      
      <CartContextProvider>
      <Header   />
      <BrowserRouter>
          <Switch>
          <Route path='/cart' component={Cart} />
          <Route exact path='/' component={Pages} />
          
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </ProductProvider>
  );
};

export default App;
