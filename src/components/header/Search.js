import React, { useEffect } from 'react';
import logo from "../assets/logo (1).svg";
import styles from "./Search.module.css";
import { FaUser,  FaSearch,  FaShoppingBasket  } from 'react-icons/fa';
import { Link } from 'react-router-dom';





const Search = ({ CartItem }) => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const search = document.querySelector(`.${styles.search}`);
  //     if (search) {
  //       search.classList.toggle("active", window.scrollY > 100);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

    return (
        <>
            <section className={styles.Search}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src={logo} alt='' />
                    </div>

                    <div className={styles.searchbox}>
                        <FaSearch className={styles.searchicon} />
                        <input type='text' placeholder='Search ...' />
                        <span>All Category</span>
                    </div>

                    <div className={styles.icon}>
                    <FaUser className={styles.navicon} />
                        <div className={styles.cart}>
                            <Link to='/cart'>
                                <FaShoppingBasket className={`${styles.navicon} ${styles.basketicon}`}  />
                                {CartItem ? <span className={styles.badge}>{CartItem.length}</span> : <span className={styles.badge}>0</span>}

                            </Link>
                        </div>
                    </div>

                    






                </div>
            </section>
        </>
    );
};

export default Search;
