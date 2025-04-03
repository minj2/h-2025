import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

export const List = ({ items, variant = 'default', ...props }) => {
  const listClassName = `list list--${variant}`;
  
  return (
    <ul className={listClassName} {...props}>
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  variant: PropTypes.oneOf(['default', 'bordered', 'striped']),
};

List.defaultProps = {
  variant: 'default',
}; 