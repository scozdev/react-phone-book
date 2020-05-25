import React, { Component } from "react";

export default class List extends Component {
  state = {
    name: "",
    id: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();

    const { id, name } = this.state;
    this.props.addList({
      ...this.state,
    });
    this.setState({
      name: "",
      id: "",
    });
  };
  render() {
    return (
      <div>
        <div className="content">
          <div className="fl">
            <form onSubmit={this.onSubmit}>
              <input
                placeholder="id"
                name="id"
                value={this.state.id}
                onChange={this.onChange}
                type="text"
              ></input>
              <input
              placeholder="name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                type="text"
              ></input>
              <button type="submit">Add</button>
            </form>
          </div>
          <ul>
            {this.props.lists.map((item) => (
              <li key={item.id}>
                {item.id} - {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
