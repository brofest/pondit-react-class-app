import React, { Component } from "react";

class Counter extends Component {
  state = {
    items: [0, 2, 5],
  };

  formatCount = () => {
    if (this.state.items[0] == 0) return `Zero`;
    return this.state.items[0];
  };
  handleIncrement = () => {
    let items = [...this.state.items];
    items[0]++;
    this.setState({ items });
  };
  handleDecrement = () => {
    let items = [...this.state.items];
    items[0]--;
    if (items[0] < 0)
      return alert("Not be able to decrement counter less than Zero");
    this.setState({ items });
  };

  handleDelete = () => {
    let items = [...this.state.items];
    if (!items[0]) return alert("State already at initial state");
    items[0] = 0;
    this.setState({ items });
  };

  render() {
    let { items } = this.state;
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <span className="badge badge-light bg-secondary">4</span>
          </nav>
          <button type="button" className="btn btn-primary m-4">
            Reset
          </button>
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div>
              <span className="badge bg-primary m-2">{this.formatCount()}</span>
              <button
                type="button"
                onClick={this.handleIncrement}
                className="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                type="button"
                onClick={this.handleDecrement}
                className="btn btn-secondary m-2"
              >
                -
              </button>
              <button
                type="button"
                onClick={this.handleDelete}
                className="btn btn-danger m-2"
              >
                Delete
              </button>
            </div>
          </div>
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div>
              <span className="badge bg-primary m-2">4</span>
              <button type="button" className="btn btn-secondary m-2">
                +
              </button>
              <button type="button" className="btn btn-secondary m-2">
                -
              </button>
              <button type="button" className="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </div>
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div>
              <span className="badge bg-primary m-2">4</span>
              <button type="button" className="btn btn-secondary m-2">
                +
              </button>
              <button type="button" className="btn btn-secondary m-2">
                -
              </button>
              <button type="button" className="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Counter;
