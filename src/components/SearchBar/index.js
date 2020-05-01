import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleOnSubmit(this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label></label>
            <input
              type="text"
              value={value}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}
