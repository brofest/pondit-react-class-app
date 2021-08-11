import React, { Component } from "react";

class Counter extends Component {
  state = {
    items: [7, 2, 5],
  };

  formatCount = ()=>{
    if(this.state.items[0]==0) return `Zero`
    return this.state.items[0];
  }

  render() {
    let { items } = this.state;
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <span className="badge badge-light bg-secondary">4</span>
        </nav>
        <button type="button" class="btn btn-primary m-4">
          Reset
        </button>
        <div
          class="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div>
            <span class="badge bg-primary m-2">{this.formatCount()}</span>
            <button type="button" class="btn btn-secondary m-2">
              +
            </button>
            <button type="button" class="btn btn-secondary m-2">
              -
            </button>
            <button type="button" class="btn btn-danger m-2">
              Delete
            </button>
          </div>
        </div>
        <div
          class="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div>
            <span class="badge bg-primary m-2">4</span>
            <button type="button" class="btn btn-secondary m-2">
              +
            </button>
            <button type="button" class="btn btn-secondary m-2">
              -
            </button>
            <button type="button" class="btn btn-danger m-2">
              Delete
            </button>
          </div>
        </div>
        <div
          class="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div>
            <span class="badge bg-primary m-2">4</span>
            <button type="button" class="btn btn-secondary m-2">
              +
            </button>
            <button type="button" class="btn btn-secondary m-2">
              -
            </button>
            <button type="button" class="btn btn-danger m-2">
              Delete
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Counter;
