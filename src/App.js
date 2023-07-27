import React from 'react';
import Header from './components/header/Header';
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pages from './pages/Pages';
import Data from "./components/mainpage/FlashDeals/Data";
import FlashCard from './components/mainpage/FlashDeals/FlashCard';
import ProductProvider from './components/mainpage/FlashDeals/ProductProvider';

const App = () => {
  const { productItems } = Data;

  return (
    <ProductProvider productItems={productItems}>
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Pages} />
          </Switch>
        </BrowserRouter>
      </>
    </ProductProvider>
  );
};

export default App;
