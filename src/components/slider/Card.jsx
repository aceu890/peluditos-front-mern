import React from 'react';
import styles from './Slider.module.css';

const Card = ({ image, make }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
      <p>{make}</p>
    </div>
  );
};

export default Card;
