import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../slider/slider.module.scss'
function Slider() {
  return (
    <div className={styles.slider}>
      <Carousel fade className={styles.karusel} style={{height:"40rem"}}>
      <Carousel.Item style={{height:"50rem"}} >
        <img
          className="d-block w-100"
          src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg"
          alt="First slide"
        />
        <Carousel.Caption className={styles.yazi}>
          <p className={styles.pelem}>Fixed-Height Slider</p>
          <h3 className={styles.helem}>Excellent bouquets for you</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"50rem"}}>
        <img
          className="d-block w-100"
          src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className={styles.yazi}>
        <p className={styles.pelem}>Fixed-Height Slider</p>
          <h3 className={styles.helem}>Excellent bouquets for you</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"50rem"}}>
        <img
          className="d-block w-100"
          src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className={styles.yazi}>
        <p className={styles.pelem}>Fixed-Height Slider</p>
          <h3 className={styles.helem}>Excellent bouquets for you</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider
