import styled from 'styled-components';

export const DivClear = styled.div`
  clear: both;
`;

export const Body = styled.div`
  margin: 0;
  padding: 0;
  color: ${props => props.color('textColor')};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  background-color: ${props => props.color('backgroundColor')};
  font-family: 'Ubuntu Mono Regular', monospace;
`;

export const CurriculumBody = styled.div`
  width: 900px;
  padding: 35px;
  overflow: hidden;
  margin: 0 auto 0 auto;
  background-color: ${props => props.color('backgroundColor')};
  box-shadow: 0 0 6px ${props => props.color('boxShadowColor')};
`;

export const Title = styled.h1`
  line-height: 46px;
  padding-bottom: 30px;
  margin: 0px 0 30px 0;
  margin-left: 220px;
  border-bottom: 3px solid ${props => props.color('textColor')};
`;

export const Email = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 100;
  line-height: 30px;
`;
