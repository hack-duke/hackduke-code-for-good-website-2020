import React from 'react';
import styled from 'react-emotion';

import {
  SectionBase,
  SectionContent,
  SectionTextContent
} from '../common-styles';
import SectionTitle from '../SectionTitle';

import Fire from './fire.svg';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 600,
    extHeightPx: 4096,
    backgroundImage: 'url(${Fire})'
  })};
  @media screen and (min-width: 1260px) {
    flex-direction: row;

    background-image: url(${Fire});
  }
`;
export default ({ id, sectionColor }) => (
  <Container id={id}>
    <SectionTitle sectionColor={sectionColor}>Campfire Stories</SectionTitle>
  </Container>
);
