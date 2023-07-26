import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Head from "./Head";
import Search from "./Search";
import styles from "./Header.module.css";

const Header = () => {
  const [hideheader, setHideheader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setHideheader(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Head />
        <Search />
        {hideheader 

        ?
        <Navbar />
          :
       <div> 
    
      <Navbar />
   </div>
         }
      </div>
    </>
  );
};

export default Header;
