import React from 'react';

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

export default RemainingDiagnosis;
