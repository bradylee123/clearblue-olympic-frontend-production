import React from 'react';
import styles from './TopSport.css';

const topSport = ( props ) => {
    return (
      <div className={styles.TopSport}>
        <strong>Top Sport(s):</strong>
        {props.top_sports.map((top_sport, index) => (
          <p key={index}>{top_sport}</p>
        ))}
        <br/>
        <strong>Percentage of medals:</strong>
        <p>{props.medal_percentage}</p>
      </div>
    )
}

export default topSport;
