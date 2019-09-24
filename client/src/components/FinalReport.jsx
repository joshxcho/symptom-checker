import React from 'react';
import PropTypes from 'prop-types';

const FinalReport = ({ symptom, chosenDiagnosis }) => {
  const finalDiagnosis = symptom.diagnosis.filter(item => item.name === chosenDiagnosis);
  return <div>{finalDiagnosis.name}</div>;
};

export default FinalReport;

FinalReport.propTypes = {
  symptom: PropTypes.instanceOf(Object).isRequired,
  chosenDiagnosis: PropTypes.string.isRequired,
};
