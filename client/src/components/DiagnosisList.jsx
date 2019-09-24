import React from 'react';
import PropTypes from 'prop-types';

import DiagnosisItem from './DiagnosisItem';

const DiagnosisList = ({ symptom, chosenSymptom }) => (
  <div className="diagnosis-container">
    {chosenSymptom === symptom.name && (
      <React.Fragment>
        <DiagnosisItem symptom={symptom} />
      </React.Fragment>
    )}
  </div>
);
export default DiagnosisList;

DiagnosisList.propTypes = {
  symptom: PropTypes.instanceOf(Object).isRequired,
  chosenSymptom: PropTypes.string.isRequired,
};
