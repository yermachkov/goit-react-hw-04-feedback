import { Component } from "react";
import { Box } from "components/Box";

export class Statistics extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  changeStats = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
};


  render() {
    return (
      <Box
        fontWeight='bold'
        p={30}
        ml={[1/2]}
        mr={[50]}
        width={[1 / 2]}
        color="#000000"
        as="section"
      >
        <h2>Please leave feedback</h2>
        <Box
          display="flex"
          gridGap="10px">
          <button type="button" onClick={this.changeStats} name="good">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </Box>


        <h3>Statistics</h3>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </Box>
    );
}
}