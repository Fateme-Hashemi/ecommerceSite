import React from 'react';
import Categories from "./Categories";
import SlideCard from './SlideCard';
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
        <section>

            <div className={styles.container}>
                <Categories />
                <SlideCard />
            </div>

        </section>
        </>
    );
};

export default Home;