import React from 'react';
import styled from 'react-emotion';

import {
  SectionBase,
  SectionContent,
  SectionTextContent
} from '../common-styles';
import SectionTitle from '../SectionTitle';

import Fire from './fire.svg';
import Heading from './campfire-heading.svg';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 600,
    extHeightPx: 4096
  })};
  @media screen and (min-width: 1260px) {
    flex-direction: row;
  }
`;

const CampfireText = styled('div')``;

const Campfire = <img src={Fire} alt="campfire" />;

export default ({ id, sectionColor }) => (
  <Container id={id} style={{ position: 'relative' }}>
    <SectionTitle sectionColor={sectionColor}>Campfire Stories</SectionTitle>
    {Campfire}
  </Container>
);
