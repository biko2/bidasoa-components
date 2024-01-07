import styled from 'styled-components';

export const BackToEditingContentButton = styled.button`
  position: sticky;
  float: left;
  left: 32px;
  bottom: 32px;
  padding: 12px;

  background: #00624D;
  border: 1px solid #3F3E3E;
  font-size: 48px;
  color: #FFFFFF;

  z-index: 1000;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #3F3E3E;
  }
`;
