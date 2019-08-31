import React from 'react';
import styled from 'react-emotion';

import {
  SectionBase,
  SectionContent,
  SectionTextContent
} from '../common-styles';
import SectionTitle from '../SectionTitle';

import Map from './map.svg';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 600,
    extHeightPx: 4096
  })};

  @media screen and (min-width: 1260px) {
  }
`;

const BodyContainer = styled('div')`
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${Map});
  /* height: 100%; */
  height: 600px;
  width: 100%;
`;

const ArrowButton = styled('div')`
  border-radius: 50%;
  color: #c4c4c4;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 0;
`;

const RightArrowButton = styled(ArrowButton)`
  right: 0;
`;

export default ({ id, sectionColor }) => (
  <Container id={id}>
    <SectionTitle sectionColor={sectionColor}>About</SectionTitle>
    <BodyContainer>
      <LeftArrowButton />

      <RightArrowButton />
    </BodyContainer>
  </Container>
);
