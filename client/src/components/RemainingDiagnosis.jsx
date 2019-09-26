import React from 'react';
import PropTypes from 'prop-types';
import FinalReport from './FinalReport';

const RemainingDiagnosis = ({
  remainingDiagnosisList,
  submit,
  change,
  symptom,
  selectedDiagnosis,
  showFinalReport,
}) => (!showFinalReport ? (
  <div>
      SELECT WHAT BEST DESCRIBES YOUR SITUATION
    <select onClick={change}>
      {remainingDiagnosisList.map(item => (
        <option key={item.diagId}>{item.name}</option>
      ))}
    </select>
    <button onClick={submit} type="button">
        SUBMIT
    </button>
  </div>
) : (
  <FinalReport symptom={symptom} selectedDiagnosis={selectedDiagnosis} />
));

RemainingDiagnosis.propTypes = {
  remainingDiagnosisList: PropTypes.instanceOf(Object).isRequired,
  symptom: PropTypes.instanceOf(Object).isRequired,
  selectedDiagnosis: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  showFinalReport: PropTypes.bool.isRequired,
};
export default RemainingDiagnosis;
