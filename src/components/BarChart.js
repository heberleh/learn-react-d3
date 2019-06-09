//Based on this work:
//https://medium.com/@caspg/responsive-chart-with-react-and-d3v4-afd717e57583


import React, {Component} from 'react'
import './BarChart.css'
// import {scaleLinear} from 'd3-scale'
// import {max} from 'd3-array
import {axisLeft, axisBottom} from 'd3-axis'
import PropTypes from 'prop-types'
import {scaleLinear, scaleBand} from 'd3-scale'
import Axes from './Axes'
import Bars from './Bars'


class BarChart extends Component{
    constructor(props){        
        super(props)
        this.xScale = scaleLinear()
        this.xScale.type = "Linear"

        this.yScale = scaleBand()
        this.yScale.type = "Band"
    }    

    render(){
        const props = this.props
        
        const maxValue = Math.max(...props.dataModel.data.map(d=>props.dataModel.valueFunc(d)))  
                
        const yScale = this.yScale 
                        .padding([.5])                      
                        .domain([0, props.dataModel.data.length])
                        .range([props.height - props.margins.bottom, props.margins.top])
        
        console.log(yScale(props.dataModel.bandFunc(props.dataModel.data[3])))
        console.log(yScale(props.dataModel.bandFunc(props.dataModel.data[4])))
        console.log(yScale(props.dataModel.bandFunc(props.dataModel.data[5])))

        const xScale = this.xScale
                        .domain([0, maxValue])
                        .range([props.margins.left, props.width - props.margins.right])

        const ticks ={
            x: {ticks:[6], tickPadding:12},
            y: {ticks:[6], tickPadding:12}
        }

        return <svg width={props.width} 
                    height={props.height}>

                    <Axes
                        scales={{xScale, yScale}}
                        margins={props.margins} 
                        svgDimensions={{width:props.width, height:props.height}} 
                        ticks={ticks}
                        dataModel={props.dataModel}
                    />

                    <Bars
                        scales={{xScale, yScale}}
                        margins={props.margins}
                        dataModel={props.dataModel}
                        maxValue={maxValue}
                        svgDimensions={{width:props.width, height:props.height}} 
                    />

                </svg>
    }
}

BarChart.defaultProps = {
    width: 700,
    height: 1200,
    margins: {top: 50, right: 20, bottom: 100, left: 200 },
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