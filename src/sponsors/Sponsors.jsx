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
import TitleBox from './titlebox.svg';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 800
  })};
  padding-bottom: 90px;
`;
const Title = styled('div')`
  width: 1000;
  text-aligh: center;
  }
`;

export default ({ id, sectionColor }) => (
  <Container id={id}>
    <Title>
      <img src={TitleBox} />
    </Title>

    <SponsorLogos />
  </Container>
);
