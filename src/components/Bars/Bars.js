import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'


class Bars extends Component{

    constructor(props) {
        super(props)
    
        this.colorScale = scaleLinear()
          .domain([0, this.props.maxValue/10, this.props.maxValue])
          .range(['#E8895B', '#38397C', '#10101C'])
          .interpolate(interpolateLab)
      }
    
      render() {
        const { scales, margins, dataModel, svgDimensions } = this.props
        const { xScale, yScale } = scales
        const { width, height } = svgDimensions
    
        function getTooltipHtml(d){
          return "<div style='max-width:200px'><b>"+
                  dataModel.bandFunc(d)+"</b><br>"+
                  dataModel.valueFunc(d)+
                  "<br>Info: "+dataModel.descriptionFunc(d)
        }

        const bars = (
          dataModel.data.map(d =>
            <rect
              key={dataModel.bandFunc(d)+dataModel.valueFunc(d)}
              x={margins.left}
              y={yScale(dataModel.bandFunc(d))}
              width={dataModel.valueFunc(d)==0? 0: xScale(dataModel.valueFunc(d))}
              height={yScale.bandwidth()}
              fill={this.colorScale(dataModel.valueFunc(d))}
              skill={dataModel.bandFunc(d)}
              total={dataModel.valueFunc(d)}
            
              data-tip={getTooltipHtml(d)}
              data-for='barTooltipBarChart'
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