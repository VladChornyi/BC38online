import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, ExtBtn } from './Button.styled';

export default function Button({ isOnline, children, color, type, isMain, variant }) {
  return (
    <ExtBtn isOnline={isOnline} isMain={isMain} type={type} color={color} variant={variant}>
      {children}
    </ExtBtn>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  isMain: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'black', 'tomato']),
  variant: PropTypes.oneOf(['main', 'secondary']).isRequired,
};
