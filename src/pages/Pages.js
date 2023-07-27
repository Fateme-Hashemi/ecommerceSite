import React from 'react';
import Home from '../components/mainpage/Home';
import styles from "./Pages.module.css"
import FlashDeals from '../components/mainpage/FlashDeals/FlashDeals';

const Pages = ({cartItem, AddToCart}) => {
    return (
        <>
         <div className={styles.container}>
         <Home cartItem={cartItem} />
          <FlashDeals AddToCart={AddToCart}   />
         </div>
       
        </>
    );
};

export default Pages;