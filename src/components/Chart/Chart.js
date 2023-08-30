import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart (props){
    //map here grabs data point values and returns an array of the numbers
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //the spread operator will pull out the value from the array and send it as an argument
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map
                (dataPoint => <ChartBar
                    key={dataPoint.label } 
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label} />)}                
        </div>
    )

}

export default Chart;