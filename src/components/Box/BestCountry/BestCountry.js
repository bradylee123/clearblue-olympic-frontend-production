import React from 'react';
import styles from './BestCountry.css';

const bestCountry = ( props ) => {
    return (
      <div className={styles.BestCountry}>
        <strong>Best Country(s):</strong>
        {props.best_countries.map((best_country, index) => (
          <p key={index}>{best_country}</p>
        ))}
        <br/>
        <strong>Number of medals:</strong>
        <p>{props.best_country_medal}</p>
      </div>
    )
}

export default bestCountry;
