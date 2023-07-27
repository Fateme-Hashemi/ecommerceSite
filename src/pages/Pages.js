import React from 'react';
import Home from '../components/mainpage/Home';
import styles from "./Pages.module.css"
import FlashDeals from '../components/mainpage/FlashDeals/FlashDeals';

const Pages = () => {
    return (
        <>
          <Home />
          <FlashDeals   />
       
        </>
    );
};

export default Pages;