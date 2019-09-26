import React from 'react';
import PropTypes from 'prop-types';

const FinalReport = ({ symptom, selectedDiagnosis }) => {
  const finalDiagnosis = symptom.diagnosis.filter(item => item.name === selectedDiagnosis);
  return (
    <div className="final-report-text">
      {finalDiagnosis.length > 0
        ? `Thank you for your submission! There are currently ${finalDiagnosis[0].frequency} reported case of ${finalDiagnosis[0].name}`
        : null}
    </div>
  );
};

export default FinalReport;

FinalReport.propTypes = {
  symptom: PropTypes.instanceOf(Object).isRequired,
  selectedDiagnosis: PropTypes.string.isRequired,
};
