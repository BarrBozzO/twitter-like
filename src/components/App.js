import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

import { handleInitialData } from "../actions/shared";

import TweetList from "./tweet/TweetList";
import AddTweetForm from "./tweet/AddTweetForm";
import Nav from "./Nav";
import TweetPage from "./tweet/TweetPage";

class App extends Component {
  componentWillMount() {
    this.props.handleInitialData();
  }
  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <LoadingBar />
          <Nav />
          {this.props.loading ? (
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={routerProps => (
                    <TweetList
                      tweetsIds={this.props.tweetsIds}
                      {...routerProps}
                    />
                  )}
                />
                <Route path="/add" component={AddTweetForm} />
                <Route path="/:id" component={TweetPage} />
                <Route render={() => <p>Not Found!</p>} />
              </Switch>
            </div>
          ) : null}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const tweetsIds = Object.keys(state.tweets);

  return {
    loading: !!state.auth.id,
    auth: state.auth,
    tweetsIds: tweetsIds
  };
};

export default connect(
  mapStateToProps,
  { handleInitialData }
)(App);
