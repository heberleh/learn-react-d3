import React, { Component } from 'react'
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'
import PropTypes from 'prop-types'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'


class Bars extends Component{

    constructor(props) {
        super(props)
    
        this.colorScale = scaleLinear()
          .domain([0, this.props.maxValue])
          .range(['#F3E5F5', '#7B1FA2'])
          .interpolate(interpolateLab)
      }
    
      render() {
        const { scales, margins, dataModel, svgDimensions } = this.props
        const { xScale, yScale } = scales
        const { width, height } = svgDimensions
    
        const bars = (
          dataModel.data.map(d =>
            <rect
              key={dataModel.bandFunc(d)+dataModel.valueFunc(d)}
              x={margins.left}
              y={yScale(dataModel.bandFunc(d))}
              width={5+scales.xScale(dataModel.valueFunc(d))-margins.left}
              height={yScale.bandwidth()}
              fill={this.colorScale(dataModel.valueFunc(d))}
              skill={dataModel.bandFunc(d)}
              total={dataModel.valueFunc(d)}
            
              data-tip={"<div style='max-width:200px'><b>"+dataModel.bandFunc(d)+"</b><br>"+dataModel.valueFunc(d)+"<br>Info: "+dataModel.descriptionFunc(d)}
              data-for='barTooltip'
              data-html={true}
            />,
          )
        )
    
        return (      
          <g>{bars}</g>       
        )
      }

}

export default Bars