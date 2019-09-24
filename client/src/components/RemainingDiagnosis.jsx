import React from 'react';
import PropTypes from 'prop-types';

const RemainingDiagnosis = ({ symptom }) => (
  <div>
    <select>
      {symptom.diagnosis.map(item => (
        <option key={item.diagId}>{item.name}</option>
      ))}
    </select>
    <button type="button">Submit</button>
  </div>
);

RemainingDiagnosis.propTypes = {
  symptom: PropTypes.instanceOf(Object).isRequired,
};
export default RemainingDiagnosis;
