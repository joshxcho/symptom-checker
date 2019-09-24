import React, { Component } from 'react';

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
    };
  }

  recommendDiagnosis = () => {
    const { symptom } = this.props;

    const max = symptom.diagnosis.reduce((prev, current) => (prev.frequency > current.frequency ? prev : current));

    return max ? <div>{`You are likely suffering from ${max.name}. Is this correct?`}</div> : null;
  };

  handleConfirm = () => {
    this.setState({ showFinalReport: true, isConfirmed: true });
  };

  renderOption = () => {
    const { symptom } = this.props;
    const { showFinalReport, showRestDiagnosis, selectedDiagnosis } = this.state;
    if (showFinalReport === true) {
      return <FinalReport symptom={symptom} selectedDiagnosis={selectedDiagnosis} />;
    }
    if (showRestDiagnosis === true) {
      return <RemainingDiagnosis symptom={symptom} selectedDiagnosis={selectedDiagnosis} />;
    }
    return null;
  };

  handleDeny = () => {
    this.setState({ showRestDiagnosis: true, isConfirmed: true });
  };

  render() {
    const { isConfirmed } = this.state;
    return isConfirmed === false ? (
      <div>
        {this.recommendDiagnosis()}
        <button type="button" onClick={this.handleConfirm}>
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
