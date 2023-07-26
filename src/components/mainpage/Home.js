import React from 'react';
import Categories from "./Categories";
import SlideCard from './SlideCard';
import styles from "./Home.module.css";
import Sider from './Sider';


const Home = () => {
    return (
        <>
        <section>

            <div className={styles.container}>
                <Categories />
                <Sider />
            </div>

        </section>
        </>
    );
};

export default Home;