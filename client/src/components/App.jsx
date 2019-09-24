import React, { Component } from 'react';
import axios from 'axios';

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

  render() {
    const { symptoms } = this.state;
    return (
      <div className="landing-page">
        {symptoms.map(symptom => (
          <div key={symptom.id}>{symptom.name}</div>
        ))}
      </div>
    );
  }
}
