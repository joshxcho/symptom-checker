import React, { Component } from 'react';

import axios from 'axios';

import PropTypes from 'prop-types';
import FinalReport from './FinalReport';
import RemainingDiagnosis from './RemainingDiagnosis';

export default class DiagnosisItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFinalReport: false,
      showRestDiagnosis: false,
      isConfirmed: false,
      selectedDiagnosis: '',
      frequency: 0,
      remainingDiagnosisList: [],
    };
  }

  componentDidMount() {
    this.recommendDiagnosis();
  }

  recommendDiagnosis = () => {
    const { symptom } = this.props;

    const max = symptom.diagnosis.reduce((prev, current) => (prev.frequency > current.frequency ? prev : current));
    this.setState({
      selectedDiagnosis: max.name,
    });
  };

  updateFrequency = () => {
    const { chosenSymptom } = this.props;
    const { selectedDiagnosis, frequency } = this.state;
    axios
      .put('/symptom', {
        name: chosenSymptom,
        diagnosis: { name: selectedDiagnosis, frequency: frequency + 1 },
      })
      .then(() => window.location.reload())
      .catch(err => console.error(err));
  };

  handleFinalSubmit = () => {
    this.setState({
      showFinalReport: true,
      isConfirmed: true,
    });
  };

  renderOption = () => {
    const { symptom } = this.props;
    const {
      showFinalReport,
      showRestDiagnosis,
      selectedDiagnosis,
      remainingDiagnosisList,
    } = this.state;

    if (showFinalReport) {
      return <FinalReport symptom={symptom} selectedDiagnosis={selectedDiagnosis} />;
    }
    if (showRestDiagnosis) {
      return (
        <RemainingDiagnosis
          remainingDiagnosisList={remainingDiagnosisList}
          selectedDiagnosis={selectedDiagnosis}
          submit={this.updateFrequency}
          change={this.handleChange}
        />
      );
    }
    return null;
  };

  handleDeny = () => {
    const { symptom } = this.props;
    const { selectedDiagnosis } = this.state;
    const remainingDiagnosisList = symptom.diagnosis.filter(
      item => item.name !== selectedDiagnosis,
    );
    this.setState({
      showRestDiagnosis: true,
      isConfirmed: true,
      remainingDiagnosisList,
    });
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ selectedDiagnosis: value });
  };

  render() {
    const { isConfirmed, selectedDiagnosis } = this.state;
    return isConfirmed === false ? (
      <div>
        <div>{`You are likely suffering from ${selectedDiagnosis}. Is this correct?`}</div>
        <button type="button" onClick={this.handleFinalSubmit}>
          YES
        </button>
        <button type="button" onClick={this.handleDeny}>
          NO
        </button>
      </div>
    ) : (
      <div>{this.renderOption()}</div>
    );
  }
}

DiagnosisItem.propTypes = {
  symptom: PropTypes.instanceOf(Object).isRequired,
  chosenSymptom: PropTypes.string.isRequired,
};
