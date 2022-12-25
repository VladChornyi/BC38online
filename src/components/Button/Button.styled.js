import styled from 'styled-components';

// export const StyledButton = styled.button`
//   padding: 10px 25px;
//   font-size: 18px;
//   font-weight: bold;
//   background-color: ${props => (props.isMain ? 'tomato' : 'transparent')};
//   color: ${props => (props.isMain ? 'white' : 'tomato')};
//   border-color: ${props => (props.isMain ? 'transparent' : 'tomato')};
// `;

const handleColorType = color => {
  switch (color) {
    case 'main':
      return '#03a9f3';
    case 'secondary':
      return '#fff';
    case 'custom':
      return '#fff';
    default:
      return '#000';
  }
};

const StyledButton = styled.button`
  padding: 10px 25px;
  font-size: 18px;
  font-weight: bold;

  background-color: ${props => props.color};
`;

export const ExtBtn = styled(StyledButton)`
  border-radius: 15px;
  color: ${props => props.color === 'black' && 'white'};
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  transition: all 500ms linear;
  &:hover {
    background-color: blue;
  }
`;

export const Wrapper = styled.div`
  margin: 10px;

  ${ExtBtn} {
    color: bisque;
  }
`;
