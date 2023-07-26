import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import {FaAngleDoubleUp} from "react-icons/fa"
import { FaChevronDown } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';






const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false);
 

    return (
        <>
        <header className={styles.header}>
            <div className={styles.container}>

                <div className={styles.categories}>
                    {/* <FaAngleDoubleUp /> */}

                    <h4>
                        Categories
                        <FaChevronDown />
                    </h4>
               
                </div>
                     
                     <div className={styles.navlink}>

                        <ul className={MobileMenu ? styles.navLinkMobileMenu : styles.links} onClick={()=> setMobileMenu(false) }>

                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/pages">Pages</Link>
                            </li>
                            <li>
                                <Link to="/user">User Account</Link>
                            </li>
                            <li>
                                <Link to="/vendor">Vendor Account</Link>
                            </li>
                            <li>
                                <Link to="/track">Track my order</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>

                        </ul>

                        <button className={styles.toggle} onClick={()=> setMobileMenu(!MobileMenu)}>
                            {
                               MobileMenu ?  <FaTimes className={styles.open} /> 
                               : 
                                <FaBars className={styles.close} />
                            }
                        </button>


                     </div>



            </div>

        </header>
        </>
    );
};

export default Navbar;