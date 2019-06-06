import React, {Component} from 'react'
import './BarChart.css'
// import {scaleLinear} from 'd3-scale'
// import {max} from 'd3-array
import {axisLeft, axisBottom} from 'd3-axis'
import PropTypes from 'prop-types'


class Axis extends Component{
    constructor(props){
        super(props)
    }
    
}

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
    }

    render(){        
        console.log(this.props.data);
        return <svg width={this.props.width} 
                    height={this.props.height}>
                    <circle cx="200" cy="300" r='5px'></circle>
                    {this.props.data.map((e,i)=><text>{e}</text>)}
                    <Bars />
                </svg>;
    }
}

BarChart.defaultProps = {
    width: 500,
    height: 500
}

BarChart.propTypes ={
    data: PropTypes.array.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
};

export default BarChart;