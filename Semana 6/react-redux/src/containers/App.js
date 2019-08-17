import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import NavBar from "../components/NavBar";
import BookList from "../components/BookList";
import Book from "../components/Book";

import "../styles.css";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/" component={BookList} />
            <Route path="/book/:id" component={Book} />
          </Switch>
        </div>
      </Provider>
    );
  }
}
