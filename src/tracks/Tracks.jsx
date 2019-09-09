import React from 'react';
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

const TrackSign = styled('div')`
  text-align: center;
  margin-top: -55pt;
  position: relative;
  :hover {
    cursor: pointer;
  }
`;

const signStyle = {};
const TracksTitle = styled('div')`
  width: 1000;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export default ({ id, sectionColor }) => (
  <Container id={id}>
    <TracksTitle>
      <img src={TracksTitleSVG} />
    </TracksTitle>
    <SectionContent style={{ margin: '0 auto' }}>
      <div
        style={{
          position: 'absolute',
          zIndex: 1,
          left: '50%'
        }}
      >
        <img src={WoodenPost} />
      </div>
      <TrackSign style={{ zIndex: 4 }}>
        <img src={HealthSign} />
      </TrackSign>
      <TrackSign style={{ zIndex: 3 }}>
        <img src={EducationSign} />
      </TrackSign>
      <TrackSign style={{ zIndex: 2 }}>
        <img src={InequalitySign} />
      </TrackSign>
      <TrackSign style={{ zIndex: 1 }}>
        <img src={EnergySign} />
      </TrackSign>
    </SectionContent>
  </Container>
);

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
