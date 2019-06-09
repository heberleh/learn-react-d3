
import React from 'react'
import Axis from '../Axis'

export default ({ scales, margins, svgDimensions, ticks}) => {
  const { height, width } = svgDimensions

  const xProps = {
    orient: 'Bottom',
    scale: scales.xScale,
    translate: `translate(0, ${height - margins.bottom})`,
    tickSize: height - margins.top - margins.bottom,
    ticks: ticks.x.ticks,
    tickPadding: ticks.x.tickPadding
  }

  const yProps = {
    orient: 'Left',
    scale: scales.yScale,
    translate: `translate(${margins.left}, 0)`,
    tickSize: width - margins.left - margins.right,
    ticks: ticks.y.ticks,
    tickPadding: ticks.y.tickPadding
  }

  return (
    <g>
      <Axis {...xProps} />
      <Axis {...yProps} />
    </g>
  )
}