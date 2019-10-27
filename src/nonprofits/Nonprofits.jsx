import React, { Component } from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { TitleFont } from '../common-styles';

import {
  SectionBase,
  SectionContent,
  SectionLeftColumn,
  SectionRightColumn,
  SectionTextContent
} from '../common-styles';

import { BLUE, RED, PURPLE, YELLOW } from '../materials';
import SectionTitle from '../SectionTitle';

import NonprofitsCard from './NonprofitsCard';
import NonprofitsTitle from './NonprofitsTitleSVG.svg';

import Swirly1 from '../tracks/Swirly1.svg';
import Swirly2 from '../tracks/Swirly2.svg';
import Swirly3 from '../tracks/Swirly3.svg';
import Swirly4 from '../tracks/Swirly4.svg';

// import GrassPatch from './grass-patch-4.svg';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 800
  })};
  position: relative;
  /* margin-bottom: 150px; */
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

const TrackSign = styled('div')`
  text-align: center;
  margin-top: -55pt;
  position: relative;
`;

const PostContainer = styled('div')`
  width: 100%;
  max-width: 700px;
  height: 950px;
  position: relative;
  margin: 0 auto;
`;

const TracksTitle = styled('div')`
  width: 1000;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const WoodenPost = styled('div')`
  position: absolute;
  margin-top: -20px;
  z-index: 1;
  left: 48%;
  width: 4%;
  height: 100%;
  background-color: #a7977c;
`;

const Swirly = styled('img')`
  position: absolute;
  z-index: 0;
  width: 20%;
`;

class Nonprofits extends Component {
  state = {
    openPost: -1
  };

  changePost = postId => {
    this.setState((prevState, prevProps) => {
      if (prevState.openPost == postId) {
        return {
          openPost: -1
        };
      }

      return {
        openPost: postId
      };
    });
  };

  render() {
    const { id, sectionColor } = this.props;

    return (
      <Container id={id}>
        <TracksTitle>
          <img src={TracksTitleSVG} />
        </TracksTitle>
        <div
          style={{
            width: '100%',
            justifyContent: 'center',
            display: 'relative'
          }}
        >
          <Swirly
            src={Swirly2}
            style={{ right: '10%', top: '10%', width: '17%' }}
          />
          <Swirly src={Swirly4} style={{ left: '5%', top: '40%' }} />
          <Swirly src={Swirly1} style={{ right: '12%', top: '55%' }} />
          <PostContainer>
            <WoodenPost />
            <TrackCard
              isOpen={this.state.openPost == 0}
              title="Reality Ministries"
              changePost={() => this.changePost(0)}
            />
            <br />
            <TrackCard
              isOpen={this.state.openPost == 1}
              title="DistributeAid"
              changePost={() => this.changePost(1)}
            />
            <br />
            <TrackCard
              isOpen={this.state.openPost == 2}
              title="NCWarn"
              changePost={() => this.changePost(2)}
            />
            <br />

            {/* <img
              src={GrassPatch}
              style={{
                position: 'absolute',
                top: '100%',
                marginTop: '-12%',
                zIndex: 2,
                width: '30%',
                left: '35%'
              }}
            /> */}
          </PostContainer>
        </div>
      </Container>
    );
  }
}
