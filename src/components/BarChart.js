import React, {Component} from 'react'
import './BarChart.css'
// import {scaleLinear} from 'd3-scale'
// import {max} from 'd3-array
import {axisLeft, axisBottom} from 'd3-axis'
import PropTypes from 'prop-types'


/**
 * Set up the axis
 */
function Axis(props){  
    axisX = axisLeft(props.yScaler);

    <g transform='translate(0,{h-padding})'></g>

    .call(xAxis);

    return (
        ,
        axisBottom(props.xScaler)
    );
}

/**
 * Set up the bars
 */
class Bars extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <circle cx="300" cy="300" r='5px'></circle>
    }
}

class BarChart extends Component{
    constructor(props){        
        super(props)
        this.xScale = scaleBand()
        this.yScale = scaleLinear()
    }    

    render(){
        const props = this.props
        
        const maxValue = Math.max(...props.data.map(d=>props.valueFunc(d)))  
                
        const xScale = this.xScale
                        .padding(props.barsPadding)
                        .domain(props.data.map(props.bandFunc))
                        .range([props.margins.left, props.width - props.margins.right])

        const yScale = this.yScale
                        .domain()
                        .range()

        return <svg width={props.width} 
                    height={props.height}>
                                      
                    <circle cx="200" cy="300" r='5px'></circle>
                    {props.data.map((e,i)=><text>{e}</text>)}

                    <Bars />
                </svg>;
    }
}

BarChart.defaultProps = {
    width: 500,
    height: 500,
    margins: {top: 50, right: 20, bottom: 100, left: 60 },
    valueFunc: d => d,
    bandFunc: (d,i) => i,
    parsPadding: 0.5
}

BarChart.propTypes ={
    data: PropTypes.array.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    margins: PropTypes.object,
    barsPadding: PropTypes.number,
    bandFunc: PropTypes.func,
    valueFunc: PropTypes.func
};

export default BarChart;