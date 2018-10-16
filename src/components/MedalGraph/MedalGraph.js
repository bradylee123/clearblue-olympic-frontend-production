import React from 'react';
import styles from './MedalGraph.css';

import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

const medalGraph = (props) => (
    <div className={styles.MedalGraph}>
        <strong>Gold, silver & bronze medals over the years</strong>
        <XYPlot
          width={500}
          height={450}
          yDomain={[0, props.medal_graph_y]}
          xType="linear">
          <XAxis title="Year"/>
          <YAxis title="Number of Medals" />
          <HorizontalGridLines />
          <LineSeries
            title='Gold'
            data={props.gold_medals} />
          <LineSeries
            data={props.silver_medals} />
          <LineSeries
            data={props.bronze_medals} />
        </XYPlot>
    </div>
);

export default medalGraph;
