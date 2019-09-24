import React from 'react';

const FinalReport = ({ symptom, chosenDiagnosis }) => {
  const finalDiagnosis = symptom.diagnosis.filter(item => item.name === chosenDiagnosis);
  return <div>{finalDiagnosis.name}</div>;
};

export default FinalReport;
