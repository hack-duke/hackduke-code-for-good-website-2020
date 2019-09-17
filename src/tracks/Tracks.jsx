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

import TrackCard from './TrackCard';
import TracksTitleSVG from './TracksTitle.svg';

import Swirly1 from './Swirly1.svg';
import Swirly2 from './Swirly2.svg';
import Swirly3 from './Swirly3.svg';
import Swirly4 from './Swirly4.svg';

import GrassPatch from './grass-patch.svg';

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
  height: 850px;
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

class Tracks extends Component {
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
              title="Health & Wellness"
              changePost={() => this.changePost(0)}
            />
            <br />
            <TrackCard
              isOpen={this.state.openPost == 1}
              title="Education"
              changePost={() => this.changePost(1)}
            />
            <br />
            <TrackCard
              isOpen={this.state.openPost == 2}
              title="Inequality"
              changePost={() => this.changePost(2)}
            />
            <br />
            <TrackCard
              isOpen={this.state.openPost == 3}
              title="Energy & Environment"
              changePost={() => this.changePost(3)}
            />
            <img
              src={GrassPatch}
              style={{
                position: 'absolute',
                top: '100%',
                marginTop: '-20%',
                zIndex: 2,
                width: '40%',
                left: '30%'
              }}
            />
          </PostContainer>
        </div>
      </Container>
    );
  }
}

export default Tracks;

// export default ({ id, sectionColor }) => (
//   <Container id={id}>
//     <SectionTitle sectionColor={sectionColor}>Tracks</SectionTitle>
//     <SectionContent columns={true}>
//       <SectionLeftColumn>
//         <img src={InequalitySign} />
//       </SectionLeftColumn>
//       <SectionRightColumn>
//         <TrackRow>
//           <TrackCard material={BLUE} title="Inequality" icon={InequalitySign}>
//             The <b>Inequality</b> track targets problems regarding both social
//             and economic inequality. Whether it is creating solutions to bridge
//             the income gap, or finding ways to reduce disparities in gender or
//             race, this track is built on the principle that everyone should have
//             the capacity to reach their full potential.
//             <TrackCTA
//               href="https://hackduke-2017.devpost.com/submissions/search?utf8=%E2%9C%93&filter%5Btrack%5D%5B%5D=poverty+and+inequality"
//               target="_blank"
//               rel="noopener"
//             >
//               See Projects <RightArrow />
//             </TrackCTA>
//           </TrackCard>
//           <TrackCard material={PURPLE} title="Energy" icon={EnergyIcon}>
//             The <b>Energy</b> track encompasses a technical perspective to deal
//             with large issues impacting energy use, allocation and environmental
//             regulations. This track has many applications, including machine
//             learning for resource extraction, the use of green energy and
//             enforcing environmental policy.
//             <TrackCTA
//               href="https://hackduke-2017.devpost.com/submissions/search?utf8=%E2%9C%93&filter%5Btrack%5D%5B%5D=environment"
//               target="_blank"
//               rel="noopener"
//             >
//               See Projects <RightArrow />
//             </TrackCTA>
//           </TrackCard>
//         </TrackRow>
//         <TrackRow>
//           <TrackCard
//             material={RED}
//             title="Health"
//             icon={HealthIcon}
//             lastRow={true}
//           >
//             The <b>Health</b> track allows hackers to work with various kinds of
//             health related data, as well as connect with mentors from the
//             intersection of health and technology. More than ever, technology
//             today is in a prime position to improve the quality, efficiency, and
//             accessibility of health care.
//             <TrackCTA
//               href="https://hackduke-2017.devpost.com/submissions/search?utf8=%E2%9C%93&filter%5Btrack%5D%5B%5D=health+and+wellness"
//               target="_blank"
//               rel="noopener"
//             >
//               See Projects <RightArrow />
//             </TrackCTA>
//           </TrackCard>
//           <TrackCard
//             material={YELLOW}
//             title="Education"
//             icon={EducationIcon}
//             lastRow={true}
//           >
//             The <b>Education</b> track pairs hackers with educators, reaching
//             out to all levels of subjects and skills. In addition to Education
//             events sponsored by HackDuke, projects aim to increase visibility of
//             technology and to introduce basic skills to the public.
//             <TrackCTA
//               href="https://hackduke-2017.devpost.com/submissions/search?utf8=%E2%9C%93&filter%5Btrack%5D%5B%5D=education"
//               target="_blank"
//               rel="noopener"
//             >
//               See Projects <RightArrow />
//             </TrackCTA>
//           </TrackCard>
//         </TrackRow>
//       </SectionRightColumn>
//     </SectionContent>
//   </Container>
// );
