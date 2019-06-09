//Based on this work:
//https://medium.com/@caspg/responsive-chart-with-react-and-d3v4-afd717e57583


import React, {Component} from 'react'
import './BarChart.css'
// import {scaleLinear} from 'd3-scale'
// import {max} from 'd3-array
import {axisLeft, axisBottom} from 'd3-axis'
import PropTypes from 'prop-types'
import {scaleOrdinal, scaleLinear} from 'd3-scale'
import Axes from './Axes'
/**
 * Set up the axis
 */
function Axes(props){
}

/**
 * Set up the bars
 */
function Bars(props){
    return <circle cx="300" cy="300" r='5px'></circle>;
}

function BandLabels(props){
    return props.dataModel.data.map( (d,i)=>
        <text x={props.xScale(props.dataModel.valueFunc(d))} 
              y={props.yScale(props.dataModel.bandFunc(d))} 
              key={i}> 
                        {props.dataModel.bandFunc(d)} 
        </text>
    )
}


class BarChart extends Component{
    constructor(props){        
        super(props)
        this.xScale = scaleLinear()
        this.yScale = scaleOrdinal()     
    }    

    render(){
        const props = this.props
        
        const maxValue = Math.max(...props.dataModel.data.map(d=>props.dataModel.valueFunc(d)))  
                
        const yScale = this.yScale                        
                        .domain(props.dataModel.data.map(props.dataModel.bandFunc))
                        .range([props.height - props.margins.bottom, props.margins.top])
        
        const xScale = this.xScale
                        .domain(props.dataModel.data.map(props.dataModel.valueFunc))
                        .range([props.margins.left, maxValue - props.margins.right])


        return <svg width={props.width} 
                    height={props.height}>
                                      
                    <circle  cx="200" cy="300" r='5px'></circle>
                    {console.log(props.dataModel.data[0])}
                    
                    {/* <Axes xScale={xScale} yScale={yScale} /> */}
                    {/* <Bars dataModel={props.dataModel}/> */}
                    <BandLabels dataModel={props.dataModel} yScale={yScale} xScale={xScale}/>
                </svg>
    }
}

BarChart.defaultProps = {
    width: 500,
    height: 500,
    margins: {top: 50, right: 20, bottom: 100, left: 60 },
    parsPadding: 0.5
}

BarChart.propTypes ={
    dataModel: PropTypes.object.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    margins: PropTypes.object,
    barsPadding: PropTypes.number
};

export default BarChart;