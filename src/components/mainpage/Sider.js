import React from 'react';
import styles from "../mainpage/Sider.module.css";
import SlideCard from './SlideCard';


const Sider = () => {
    return (
        <>
       <section className={styles.homeside}>
            <div className={styles.container}>
              
              <SlideCard />

            </div>

        </section>
        </>
    );
};

export default Sider;