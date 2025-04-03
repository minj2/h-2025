import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ variant, children, ...props }) => {
  return (
    <button
      className={`button button--${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'primary',
}; 