import React from 'react';
import PropTypes from 'prop-types';

const Symptom = ({ symptom }) => <option>{symptom.name}</option>;

Symptom.propTypes = {
  symptom: PropTypes.instanceOf(Object).isRequired,
};
export default Symptom;
