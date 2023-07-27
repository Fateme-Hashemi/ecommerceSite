import React from 'react';
import styles from "./Flash.module.css";
import { FaRegHeart, FaStar, FaPlus } from 'react-icons/fa';
import { useProductContext } from './ProductProvider';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FlashCard = () => {
  const productItems = useProductContext();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ marginTop: "-100px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((item) => (
          <div className={styles.box} key={item.id}>
            <div className={styles.product}>
              <div className={styles.img}>
                <span className={styles.discount}>{item.discount}% Off</span>
                <img src={item.cover} alt={item.name} />
                <div className={styles.productlink}>
                  <label>{item.name}</label> <br />
                  <FaRegHeart />
                </div>
              </div>
              <div className={styles.productdetails}>
                <h3>{item.name}</h3>
                <div className='rate'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className={styles.price}>
                  <h4>{item.price}.00</h4>
                  <button>
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FlashCard;
