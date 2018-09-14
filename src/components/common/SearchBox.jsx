import React, { Component } from "react";
import Input from "./Input";

class SearchBox extends Component {
  state = { keyword: "" };

  handleChange = ({ currentTarget: input }) => {
    this.props.onSearch(input.value);
  };

  render() {
    return (
      <Input
        name="Search"
        type="text"
        value={this.props.value}
        onChange={this.handleChange}
        placeholder="Search for a movie title"
      />
    );
  }
}

export default SearchBox;
