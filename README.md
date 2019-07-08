# Integrating React & D3

In this repo I integrate **React & D3** and create some simple charts.

The method I am trying to keep here is by not using the `enter()` `exit()` D3 functions; instead, I give all the control to React.

I also code keeping in mind that I am learning React and how to use `PropTypes`, `defaultProps` and Testing tools.

The result is a Web-Page with some plots, and a repo with many React components.

## Data

I created a javascript-based [Comics Database]() and I explore it here using SQL to create the data in the format I need. The database contains  instances of Comics Characters from Marvel and DC Universes, extracted from Wikipedia in June 2019. Note that the database is biased towards what was and what was not registered in the Wikipedia by this date.

## Vis 1 - Bar Chart

In the first time integrating D3 and React I coded based on this [post](https://medium.com/@caspg/responsive-chart-with-react-and-d3v4-afd717e57583) by Kacper Goliński.

The data visualized here is a plot representing the number of Superabilities per character.
Given that there are many characters with registered abilities, I set it to horizontal layout.

## Vis 2 - Stacked Bar Chart

Then, I adapted the chart to be a Stacked Bar Chart and show the distribution of genders among superabilities.

Visualize here: https://heberleh.github.io/learn-react-d3/
