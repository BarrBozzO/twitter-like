import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { handleCreateTweet } from "../../actions/tweets";

class AddTweetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      replyingTo: this.props.replyingTo,
      author: this.props.auth.id,
      toTweets: false
    };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { text, author, replyingTo } = this.state;
    this.props.handleCreateTweet(text, author, replyingTo);
    this.setState({ text: "", toTweets: !replyingTo });
  }
  render() {
    if (this.state.toTweets) {
      return <Redirect to="/" />;
    }

    return (
      <div className="add-tweet">
        <h1 className="add-tweet__header">Compose new Tweet</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea
            className="add-tweet__text"
            onChange={this.handleChange.bind(this)}
            placeholder="What is going on?"
            value={this.state.text}
          />
          <div>
            <button
              className="add-tweet__button"
              type="submit"
              disabled={this.state.text === ""}
            >
              CREATE
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddTweetForm.propTypes = {
  replyingTo: PropTypes.string
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { handleCreateTweet }
)(AddTweetForm);
