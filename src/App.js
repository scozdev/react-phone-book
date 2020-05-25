import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import List from "./List";
import Search from "./Search";

export default class App extends Component {
  state = {
    lists: [{ id: 1, name: "mehmet" }],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((item) => item.json())
      .then((item) => this.setState({ lists: item }));
  }

  addList = (e) => {
    const { lists } = this.state;
    lists.push(e);
    this.setState({
      lists: lists,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <ul className="navs">
            <li>
              <Link className="btn" to="/">Ekle</Link>
            </li>

            <li>
              <Link to="ara">Filtrele</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <List
                {...props}
                lists={this.state.lists}
                addList={this.addList}
              ></List>
            )}
          />
          <Route
            exact
            path="/ara"
            render={(props) => (
              <Search {...props} lists={this.state.lists}></Search>
            )}
          />
        </Switch>
      </div>
    );
  }
}
