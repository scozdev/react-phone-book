import React, { Component } from "react";

export default class Search extends Component {
  state = {
    name: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name } = this.state;
    const { lists } = this.props;
    const fil = lists.filter((item) => {
      return item.name.toLowerCase().indexOf(name) !== -1;
    });
    return (
      <div>
        <div className="content">
          <div className="fl">
            <form>
              <input
                placeholder="İsmi gir"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                type="text"
              ></input>
            </form>
          </div>
          <ul>
            {fil.map((item) => (
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
