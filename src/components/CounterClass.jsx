import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Лічильник (Class)</h2>
        <p>Поточне значення: {this.state.count}</p>
        <button onClick={this.handleIncrement}>+ 1</button>
      </div>
    );
  }
}

export default CounterClass;