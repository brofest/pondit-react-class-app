import React, { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
  }
  render() {
    let { id, value, onHandleIncrement, onHandleDecrement, onHandleFormat } =
      this.props;
    return (
      <>
        <div key={id}>
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div>
              <span className="badge bg-primary m-2">{value}</span>
              <button
                type="button"
                onClick={() => onHandleIncrement(id)}
                className="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => onHandleDecrement(id)}
                className="btn btn-secondary m-2"
              >
                -
              </button>
              <button
                type="button"
                onClick={() => onHandleFormat(id)}
                className="btn btn-danger m-2"
              >
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
