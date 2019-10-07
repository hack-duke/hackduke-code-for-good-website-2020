import React from 'react';
import styled from 'react-emotion';

import { SectionBase, SectionContent } from '../common-styles';

import FAQTitleSVG from './faq-title.svg';
import FAQItem from './FAQItem';

import CloudLeftSVG from './cloud-left.svg';
import CloudRightSVG from './cloud-right.svg';

// import MountainsSVG from './mountains.svg';
import MountainBottomRightSVG from './mountain-bottom-right.svg';
import MountainTopRightSVG from './mountain-top-right.svg';
import MountainLeftSVG from './mountain-left.svg';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 600,
    extHeightPx: 4096
  })};
`;

const FAQTitle = styled('div')`
  width: 1000;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const FAQContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 800px;

  @media screen and (min-width: 1260px) {
    flex-direction: row;
  }
`;

const FAQColumn = styled('div')`
  flex-grow: 1;
  flex-basis: 0;

  @media screen and (min-width: 1260px) {
    margin-right: 50px;
    :last-child {
      margin-right: 0;
    }
  }
`;

const SponsorshipLink = styled('a')`
  text-decoration: underline;
  color: white !important;
`;

const TitleImg = styled('img')`
  @media screen and (max-width: 1260px) {
    display: none;
  }
`;

const MountainLeftImg = styled('img')`
  position: absolute;
  top: 38%;
  left: 0%;
  @media screen and (max-width: 1260px) {
    display: none;
  }
`;

const MountainTopRightImg = styled('img')`
  position: absolute;
  top: 21%;
  left: 83%;
  overflow: hidden;
  @media screen and (max-width: 1260px) {
    display: none;
  }
`;
const MountainBottomRightImg = styled('img')`
  position: absolute;
  top: 60%;
  left: 81%;
  @media screen and (max-width: 1470px) {
    display: none;
  }
`;
export default ({ id, sectionColor }) => (
  <Container id={id} style={{ position: 'relative' }}>
    <FAQTitle>
      <TitleImg src={CloudLeftSVG} />
      <img src={FAQTitleSVG} />
      <TitleImg src={CloudRightSVG} />
    </FAQTitle>
    <MountainLeftImg src={MountainLeftSVG} />
    <MountainTopRightImg src={MountainTopRightSVG} />
    <MountainBottomRightImg src={MountainBottomRightSVG} />
    <SectionContent>
      <FAQContainer>
        <FAQColumn>
          <FAQItem title="Prizes?">
            Yes, but there's a little twist! The grand prizes are donations
            under your name to charities and causes! There will be grand prize
            winners for each track, novice track and many other company
            sponsored API prizes as well.
          </FAQItem>
          <FAQItem title="When? Where?">
            HackDuke starts Saturday, November 2nd at 9:00 AM EST and ends on
            Sunday, November 3rd at 5:30 PM EST. It is hosted on Duke
            University's West Campus, in and around the Fitzpatrick Engineering
            Building, Durham, NC 27705.
          </FAQItem>
          <FAQItem title="Who can participate?">
            You can participate as long as you're a student (undergraduate or
            graduate) over 18 years old! If you're a new grad, we'd love to have
            you too.
          </FAQItem>
          <FAQItem title="I want to volunteer or mentor! How can I help?">
            To help with logistics day of,{' '}
            <SponsorshipLink href="https://docs.google.com/forms/d/e/1FAIpQLSeOZ0ZuFcGknWby-nsjv6cJq0vnr1bZcidHDk3G_EgK0k1BDA/viewform">
              sign up to volunteer
            </SponsorshipLink>
            {'. '}
            If you're looking to mentor hackers with tech or track knowledge,{' '}
            <SponsorshipLink href="mailto:hackers@hackduke.org">
              email us
            </SponsorshipLink>
            {'! '}
            Both mentors and volunteers will get a special HackDuke T-shirt!
          </FAQItem>
          <FAQItem title="How can I become a sponsor?">
            Email us at{' '}
            <SponsorshipLink href="mailto:sponsorship@hackduke.org">
              sponsorship@hackduke.org
            </SponsorshipLink>
            !
          </FAQItem>
        </FAQColumn>
        <FAQColumn>
          <FAQItem title="Who can I work with?">
            Anyone! Get to know your fellow programmers better from your own and
            other schools! The only request that we have is that you make a new
            friend by talking to each other, our mentors and our experts!
          </FAQItem>
          <FAQItem title="Anything I should remember to bring?">
            Bring your laptop, chargers, ethernet cables (or use WiFi),
            toiletries/sleeping bags if you plan to stay the night, any Nerf gun
            arsenal you may have, as well as a spirit to Code for Good!
          </FAQItem>
          <FAQItem title="What can I make?">
            We welcome all software and hardware hacks that align to our tracks
            for impact. We will also have lab space for hardware hackers.
          </FAQItem>
          <FAQItem title="Travel?">
            We will be sending two buses: one to UVA and VTech, and one to
            Georgia Tech, UNC and NC State. The max capacity of each bus is 60
            people. More details will be provided in the next few weeks. Travel
            reimbursements will be taken on a case-by-case basis but carpoolers
            will be given priority.
          </FAQItem>
        </FAQColumn>
      </FAQContainer>
    </SectionContent>
  </Container>
);
