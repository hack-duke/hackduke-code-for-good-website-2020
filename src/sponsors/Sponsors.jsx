import React from 'react';
import styled from 'react-emotion';

import {
  SectionBase,
  SectionContent,
  SectionLeftColumn,
  SectionRightColumn,
  SectionTextContent
} from '../common-styles';

import SectionTitle from '../SectionTitle';

import SponsorsLine from './sponsors-line.svg';
import SponsorLogos from './SponsorLogos';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 800,
    backgroundImage: `url(${SponsorsLine})`
  })};
  padding-bottom: 90px;
`;

export default ({ id, sectionColor }) => (
  <Container id={id}>
    <SectionTitle sectionColor={sectionColor}>Sponsors</SectionTitle>

    <SponsorLogos />
  </Container>
);
