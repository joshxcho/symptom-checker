import React, { Component } from 'react';
import Symptom from './Symptom';
import DiagnosisList from './DiagnosisList';

export default class SymptomTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSymptomChosen: false,
      chosenSymptom: '',
    };
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ chosenSymptom: value });
  };

  submitSymptom = () => {
    this.setState({ isSymptomChosen: true });
  };

  render() {
    const { symptoms } = this.props;
    const { isSymptomChosen, chosenSymptom } = this.state;

    return isSymptomChosen === false ? (
      <div className="symptom-container">
        SELECT YOUR SYMPTOM
        <select onChange={this.handleChange}>
          <option />
          {symptoms.map(symptom => (
            <Symptom key={symptom.id} symptom={symptom} value={symptom.name} />
          ))}
        </select>
        <button onClick={this.submitSymptom} type="button">
          SUBMIT
        </button>
      </div>
    ) : (
      <div className="symptom-container">
        {symptoms.map(symptom => (
          <DiagnosisList key={symptom.id} symptom={symptom} chosenSymptom={chosenSymptom} />
        ))}
      </div>
    );
  }
}
