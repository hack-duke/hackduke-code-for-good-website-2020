import React from 'react';
import styled from 'react-emotion';

export default props => (
  <OuterContainer>
    <InnerContainer>{props.children}</InnerContainer>
  </OuterContainer>
);

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const InnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
