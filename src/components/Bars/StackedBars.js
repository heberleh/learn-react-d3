import React, { Component } from 'react'
import { scaleOrdinal } from 'd3-scale'



class StackedBars extends Component{

    constructor(props) {
        super(props)
    
        this.colorScale = scaleOrdinal();
        
        console.log(this.props.dataModel.labels)
        this.colorScale.domain(this.props.dataModel.labels)
        
        console.log(this.props.colorsVector)
        this.colorScale.range(this.props.colorsVector)    

        console.log(this.colorScale)    
      }
    
      renderStackedBar(d){
        const { scales, margins, dataModel } = this.props
        const { xScale, yScale } = scales        

        let title = dataModel.bandFunc(d)
        let description = dataModel.descriptionFunc(d)

        let values = dataModel.valueFunc(d)              
        let labels = dataModel.labels

        let total = values.reduce((a,b)=>a+b)

        return (values.map((val, i) =>
          <rect
            key={title+labels[i]+val}

            x={i===0 ? margins.left : xScale(total-val)}
            width={val ===0 ? 0 : xScale(val)}
            
            y={yScale(dataModel.bandFunc(d))}                
            height={yScale.bandwidth()}
            
            fill={this.colorScale(labels[i])}
          
            data-tip={"<div style='max-width:300px'><b>"+title+" ("+labels[i]+")</b><br>"+val+" characters<br>Info: "+description}
            data-for='barTooltip'
            data-html={true}
          />
        ))
      }

      render() {
        const bars = (          
          <g>{this.props.dataModel.data.map(d => this.renderStackedBar(d))}</g>
        )
    
        return (      
          <g>{bars}</g>       
        )
      }

}

export default StackedBars