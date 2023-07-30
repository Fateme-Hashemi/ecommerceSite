import React, { useState, useContext } from 'react';
import styles from "./Flash.module.css";
import { FaRegHeart, FaStar, FaPlus, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import {isInCart} from "../../../function";

//react-slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//context
import {cartContext} from "./context/CartContextProvider";
import { useProductContext } from "./context/ProductProvider";


const NextArrow = (props) => {
  const {onClick} = props
  return (
    <div className={styles.controlBtn} onClick={onClick}>
        <button className={styles.prev}>
              <FaLongArrowAltLeft className={styles.arrow} />
        </button>
    </div>
  )
}

const PrevArrow = (props) => {
  const {onClick} = props
  return (
    <div className={styles.controlBtn} onClick={onClick}>
        <button className={styles.next}>
              <FaLongArrowAltRight className={styles.arrow} />
        </button>
    </div>
  )
}





const FlashCard = () => {

const {count, setCount} =useState(0)

const increasment = () => {
  setCount (count + 1)
}



  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ marginTop: "0" }}>{dots}</ul>;
    },
  };

  const productItems = useProductContext();

  const {state, dispatch} =useContext(cartContext);








  return (
    <>
     <div className={styles.container}>
     <Slider {...settings}>
        {productItems.map((item) => {
          return (
            <div className={styles.box} key={item.id}>
              <div className={styles.product}>
                <div className={styles.img}>
                  <span className={styles.discount}>{item.discount}% Off</span>
                  <img src={item.cover} alt={item.name} />
                  <div className={styles.productlink}>
                    <label>{count}</label> <br />
                    <FaRegHeart className={styles.icon} />
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


                    <div >
                        {
                          isInCart(state, productItems.id) 
                          ?
                          <FaPlus onClick={() => dispatch({ type: 'INCREASE', payload: productItems })} />
                          :
                          <button onClick={()=> dispatch({type:"ADDITEM", payload: productItems  })}>Add</button>
                        }
 
                   

                     
                    </div>




                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

     </div>
    </>
  );
};

export default FlashCard;
