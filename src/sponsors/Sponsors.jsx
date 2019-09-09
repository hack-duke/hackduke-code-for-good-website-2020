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
import LeftStarsSVG from './left-stars.svg';
import RightStarsSVG from './right-stars.svg';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 800
  })};
  padding-bottom: 90px;
  margin: 0 auto;
`;

const SponsorTitle = styled('div')`
  width: 1000;
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 90px;
`;

const TitleImg = styled('img')`
  @media screen and (max-width: 1260px) {
    display: none;
  }
`;

export default ({ id, sectionColor }) => (
  <Container id={id}>
    <SponsorTitle>
      <TitleImg src={LeftStarsSVG} />
      <img src={TitleBox} />
      <TitleImg src={RightStarsSVG} />
    </SponsorTitle>

    <SponsorLogos />
  </Container>
);
