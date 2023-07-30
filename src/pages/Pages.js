import React from 'react';
import Home from '../components/mainpage/Home';
import styles from "./Pages.module.css"
import FlashDeals from '../components/mainpage/FlashDeals/FlashDeals';

const Pages = () => {
    return (
        <>
         <div className={styles.container}>
         <Home />
          <FlashDeals className={styles.flashcontainer}   />
         </div>
       
        </>
    );
};

export default Pages;