import React from 'react';
import styles from "./Head.module.css";

import {FaPhone} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaFlag} from "react-icons/fa";

const Head = () => {
    return (
        <>
            <section className={styles.head}>
                <div className={styles.container} >

                   
                   <div className={styles.left} >

                    <ul>
                        <li>
                        <FaPhone className={styles.icon}  />
                        <label>+888012 3457</label>
                        </li>
                        <li>
                        <FaEnvelope className={styles.icon}  />
                        <label>example@gmail.com</label>
                        
                        </li>
                    </ul>
                   </div>



                   <div className={styles.right}>

                   <ul>
                        <li>
                        <label>These FAQ's</label>
                        <FaFlag className={styles.flag} />
                        </li>
                        <li>
                        <label>EN</label>
                       
                        
                        </li>
                    </ul>


                    </div>

                    
                </div>

            </section>
        </>
    );
};

export default Head;