import React from 'react';
import PropTypes from 'prop-types';

const FinalReport = ({ symptom, selectedDiagnosis }) => {
  const finalDiagnosis = symptom.diagnosis.filter(item => item.name === selectedDiagnosis);
  return (
    <div className="final-report-text">
      {finalDiagnosis.length > 0
        ? `There are currently ${finalDiagnosis[0].frequency} case of ${finalDiagnosis[0].name}`
        : null}
    </div>
  );
};

export default FinalReport;

FinalReport.propTypes = {
  symptom: PropTypes.instanceOf(Object).isRequired,
  selectedDiagnosis: PropTypes.string.isRequired,
};
