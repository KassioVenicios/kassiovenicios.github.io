import styled from 'styled-components';

export const DivClear = styled.div`
  clear: both;
`;

export const CurriculumBody = styled.div`
  margin: 0;
  padding: 0;
  color: ${props => props.color('textColor')};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  background: ${props => props.color('backgroundColor')};
  font-family: 'Ubuntu Mono Regular', monospace;
`;
