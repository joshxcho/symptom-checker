import React from 'react';

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
