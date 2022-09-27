import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      // eslint-disable-next-line react/no-unused-state,react/prop-types
      mainCount: props.mainCount || 0,
      // eslint-disable-next-line react/no-unused-state,react/prop-types
      timeCount: props.timeCount || 2000,
      // eslint-disable-next-line react/no-unused-state,react/prop-types
      symbol: props.symbol || '',
    };
  }

  // eslint-disable-next-line react/sort-comp
  counter = (minimum, maximum) => {
    // eslint-disable-next-line no-plusplus
    for (let count = minimum; count <= maximum; count++) {
      // eslint-disable-next-line react/destructuring-assignment
      const time = (this.state.timeCount / maximum) * count;
      setTimeout(() => {
        this.setState({ count });
      }, time);
    }
  };

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.counter(0, this.state.mainCount);
  }

  render() {
    return (
      <h4>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {this.state.count}
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {this.state.symbol}
      </h4>
    );
  }
}

export default Counter;
