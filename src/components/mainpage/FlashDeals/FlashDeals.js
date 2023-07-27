import React from 'react';
import styles from "./Flash.module.css";
import { FaBolt } from "react-icons/fa";
import FlashCard from './FlashCard';
import { useProductContext } from './ProductProvider';

const FlashDeals = () => {
  const productItems = useProductContext();

  return (
    <>
      <section className={styles.flashbackground}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <FaBolt className={styles.bolticon} />
            <h1>Flash Deals</h1>
          </div>
          <FlashCard />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
