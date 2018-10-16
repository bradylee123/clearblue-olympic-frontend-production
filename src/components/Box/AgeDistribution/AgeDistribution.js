import React from 'react';
import styles from './AgeDistribution.css';

import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';

const ageDistribution = ( props ) => {
    return (
      <div className={styles.AgeDistribution}>
        <strong>Age Distribution</strong>
        <br/><br/>
        <XYPlot
          width={150}
          height={150}
          yDomain={[0, props.age_graph_y]}
          xType="ordinal">
          <HorizontalGridLines />
          <VerticalBarSeries
            data={props.ageCount} />
          <XAxis />
          <YAxis />
        </XYPlot>

      </div>
    )
}

export default ageDistribution;
