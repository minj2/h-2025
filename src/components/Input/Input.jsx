import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export const Input = ({ type = 'text', placeholder, label, error, ...props }) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className={`input ${error ? 'input--error' : ''}`}
        placeholder={placeholder}
        {...props}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  label: '',
  error: '',
}; 