import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { TitleFont } from '../common-styles';

import {
  SectionBase,
  SectionContent,
  SectionTextContent
} from '../common-styles';

import { BLUE, RED, PURPLE, YELLOW } from '../materials';
import SectionTitle from '../SectionTitle';

import TrackCard from './TrackCard';

import InequalitySign from './icons/inequality-sign.svg';
import EducationSign from './icons/education-sign.svg';
import EnergySign from './icons/energy-sign.svg';
import HealthSign from './icons/health-sign.svg';

import WoodenPost from './icons/wooden-post.svg';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 800
  })};
  position: relative;
`;

const TrackRow = styled('div')`
  text-align: center;
`;

const TrackCTA = styled('a')`
  ${TitleFont};
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  margin-top: 15px;
  cursor: pointer;
  /* TODO: remove this hack */
  position: absolute;
  bottom: 25px;
  transition: opacity 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

const iconTranslate = css`
  transform: translateY(0.033em);
  display: inline-block;
`;
const RightArrow = () => (
  <span className="icon-right-open" css={iconTranslate} />
);

const TrackSign = styled('img')`
  text-align: center;
  margin-top: -55pt;
  position: relative;
  :hover {
    cursor: pointer;
  }
`;

export default ({ id, sectionColor }) => (
  <Container id={id}>
    <SectionTitle sectionColor={sectionColor}>Tracks</SectionTitle>
    <SectionContent style={{ margin: '0 auto' }}>
      <div style={{ margin: '0 auto' }}>
        <div
          style={{
            position: 'absolute',
            zIndex: 0,
            left: '50%'
          }}
        >
          <img src={WoodenPost} />
        </div>
        <TrackSign src={HealthSign} style={{ zIndex: 4 }} />
        <TrackSign style={{ zIndex: 3 }} src={EducationSign} />
        <TrackSign style={{ zIndex: 2 }} src={InequalitySign} />
        <TrackSign style={{ zIndex: 1 }} src={EnergySign} />
      </div>
    </SectionContent>
  </Container>
);
