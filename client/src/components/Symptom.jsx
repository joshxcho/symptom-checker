import React from 'react';
import PropTypes from 'prop-types';

const Symptom = ({ symptom }) => <option value={symptom.name}>{symptom.name}</option>;

Symptom.propTypes = {
  symptom: PropTypes.instanceOf(Object).isRequired,
};
export default Symptom;
