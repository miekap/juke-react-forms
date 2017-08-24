import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NewPlaylist extends Component {

  constructor () {
    super();
    this.state = {
      inputValue: '',
      isDisabled: true,
      dirty: false
    };
    this.handleChange = this.handleChange.bind(this); // don't forget this!
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({
      inputValue: event.target.value,
      isDisabled: (
        ((event.target.value.length > 0)
          && (event.target.value.length <= 16))
          ? false
          : true
      ),
      dirty: true
    });
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state.inputValue,"here")
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
      <div className="well">
        <form className="form-horizontal"
        onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>New Playlist</legend>

            {(this.state.isDisabled && this.state.dirty) && (
              <div className="alert alert-warning">{
                (event.target.value.length > 16)
                ? <span>too long</span>
                : <span>enter something</span>
            }
              </div>
            )}


            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input className="form-control"
                onChange={this.handleChange}
                value={this.state.inputValue}
                type="text" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" disabled={this.state.isDisabled}>Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
