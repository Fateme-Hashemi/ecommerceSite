import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SlideCard.module.css";

const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
          return <ul style={{ marginTop: "-100px" }}>{dots}</ul>
        },
    }

  return (
    <div className={styles.slidercontainer}>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <div className={`${styles.boxcontainer} ${styles.slideritem}`} key={index}>
           
              <div className={styles.left}>
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <button className={styles.btn}>Visit Collections</button>
              </div>
              <div className={styles.right}>
                <img src={value.cover} alt='' />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default SlideCard;
