import React from 'react';
import PropTypes from 'prop-types';

const RemainingDiagnosis = ({ remainingDiagnosisList, submit, change }) => (
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
);

RemainingDiagnosis.propTypes = {
  remainingDiagnosisList: PropTypes.instanceOf(Object).isRequired,
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};
export default RemainingDiagnosis;
