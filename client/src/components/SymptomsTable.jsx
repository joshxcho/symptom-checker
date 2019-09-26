import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Symptom from './Symptom';
import DiagnosisList from './DiagnosisList';

export default class SymptomsTable extends Component {
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
        <button type="button" onClick={this.submitSymptom} disabled={!chosenSymptom}>
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

SymptomsTable.propTypes = {
  symptoms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      diagnosis: PropTypes.arrayOf(
        PropTypes.shape({
          diagId: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          frequency: PropTypes.number.isRequired,
        }),
      ),
    }),
  ).isRequired,
};
