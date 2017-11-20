import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionsCreators } from "redux";
import { fetchWeather } from "../actions/index";
import { bindActionCreators } from "../../../../../../Library/Caches/typescript/2.6/node_modules/redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" }

    //fix this. callback function
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this) 
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) { 
    event.preventDefault()

    //we need to go and fetch data
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get five-day forecast in your favorite city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

//LINK TO ACTIONS
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar)