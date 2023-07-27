import React from 'react';
import Header from './components/header/Header';
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pages from './pages/Pages';
import Data from "./components/mainpage/FlashDeals/Data";
import FlashCard from './components/mainpage/FlashDeals/FlashCard';
import ProductProvider from './components/mainpage/FlashDeals/ProductProvider';
import { useState } from 'react';
import Cart from './common/cart/Cart';

const App = () => {
  const { productItems } = Data;
  const [CartItem, setCartItem] = useState([])

const AddToCart = (product) => {
  const productExit = CartItem.find((item) => item.id === product.id)
  if (productExit) {
    setCartItem(CartItem).map((item)=> 
      (item.id ===product.id ? {...productExit, qty: productExit.qty + 1} : item))
    }
  }


  return (
    <ProductProvider productItems={productItems}>
      <>
        <Header CartItem={CartItem}  />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={()=> <Pages AddToCart={AddToCart} />} />
            <Route exact path='/cart' component={()=> <Cart CartItem={CartItem} AddToCart={AddToCart}  />} />
          </Switch>
        </BrowserRouter>
      </>
    </ProductProvider>
  );
};

export default App;
