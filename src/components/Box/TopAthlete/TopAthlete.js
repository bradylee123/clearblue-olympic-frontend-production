import React from 'react';
import styles from './TopAthlete.css';

const topAthlete = ( props ) => {
    return (
      <div className={styles.TopAthlete}>
        <strong>Top Athlete(s):</strong>
        {props.top_athletes.map((top_athlete, index) => (
          <p key={index}>{top_athlete}</p>
        ))}
        <br/>
        <strong>Number of medals:</strong>
        <p>{props.top_athlete_medal}</p>
      </div>
    )
}

export default topAthlete;
