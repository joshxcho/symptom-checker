import React, { Component } from 'react';
import axios from 'axios';
import SymptomsTable from './SymptomsTable';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symptoms: [],
    };
  }

  componentDidMount = () => {
    this.getSymptoms();
  };

  getSymptoms = () => {
    axios
      .get('/api')
      .then(res => this.setState({
        symptoms: res.data,
      }))
      .catch(err => console.error(err));
  };

  startOver = () => {
    window.location.reload();
  };

  render() {
    const { symptoms } = this.state;
    return (
      <div className="landing-page">
        <button className="main-btn" type="button" onClick={this.startOver}>
          START OVER
        </button>
        <SymptomsTable symptoms={symptoms} submit={this.submitSymptoms} />
      </div>
    );
  }
}
