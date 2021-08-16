import React, { Component } from "react";
import Counter from "./Counter.Component";
class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 5 },
      { id: 1, value: 10 },
      { id: 2, value: 15 },
    ],
  };

  resetCounter = () => {
    let counters = this.state.counters.map((e, index) => {
      return {
        id: index,
        value: 0,
      };
    });
    this.setState({ counters });
  };

  handleIncrement = (id) => {
    let counterItem = this.state.counters.map((counter) => {
      if (counter.id == id) {
        return {
          id: counter.id,
          value: counter.value + 1,
        };
      } else {
        return counter;
      }
    });
    this.setState((prevState) => {
      return { counters: counterItem };
    });
  };
  handleDecrement = (id) => {
    let flag = false;
    let counterItem = this.state.counters.map((counter) => {
      if (counter.id == id) {
        if (counter.value < 1) flag = true;
        return {
          id: counter.id,
          value: counter.value - 1,
        };
      } else {
        return counter;
      }
    });
    if (!flag) {
      this.setState((prevState) => {
        return { counters: counterItem };
      });
    } else {
      alert("Can't decrement less than zero");
    }
  };
  handleFormat = (id) => {
    let counterItem = this.state.counters.map((counter) => {
      if (counter.id == id) {
        return {
          id: counter.id,
          value: 0,
        };
      } else {
        return counter;
      }
    });

    this.setState((prevState) => {
      return { counters: counterItem };
    });
  };
  render() {
    const { counters } = this.state;
    return (
      <>
        <h1>This is Counters Components</h1>
        <button
          type="button"
          onClick={this.resetCounter}
          className="btn btn-secondary m-2"
        >
          Reset
        </button>
        {counters.map((element) => (
          <Counter
            key={element.id}
            id={element.id}
            value={element.value}
            onHandleIncrement={this.handleIncrement}
            onHandleDecrement={this.handleDecrement}
            onHandleFormat={this.handleFormat}
          />
        ))}
      </>
    );
  }
}

export default Counters;
