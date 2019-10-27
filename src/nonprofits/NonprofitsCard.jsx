import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { Link } from 'react-router-dom';
import { SecondaryText, ShadowItem, TitleFont } from '../common-styles';
import AnimateHeight from 'react-animate-height';

import upArrow from '../tracks/up-arrow.svg';
import downArrow from '../tracks/down-arrow.svg';

const zeroBottomMargin = css`
  margin-bottom: 0;
`;

const CardBase = styled('div')`
  padding: 25px;
  color: white;
  position: relative;
  z-index: 3;
  margin: 5pt;
  width: 90%;
  left: 5%;
  top: 0;
  transition: top ease 0.25s;
  :hover {
    cursor: pointer;
    filter: brightness(105%);
    top: -3px;
  }
`;

const Border = styled('div')`
  position: absolute;
  z-index: 2;
  border: 3px solid white;
  width: 100%;
  height: 100%;
  padding: 10px 0 10px 10px;
  pointer-events: none;
`;

const Title = styled('div')`
  font-size: 1.5em;
  font-weight: bold;
  padding: 5px 0 5px 0;
`;

const CardContent = styled('div')`
  position: relative;
`;

const bgColors = {
  'Reality Ministries': '#2B9B99',
  DistributeAid: '#E68560',
  'NC WARN': '#678BE1'
};

const offsetY = {
  'Reality Ministries': '7px',
  DistributeAid: '-9px',
  'NC WARN': '6px'
};

const offsetX = {
  'Reality Ministries': '8px',
  DistributeAid: '7px',
  'NC WARN': '-9px'
};

const trackDetails = {
  'Reality Ministries':
    'Reality Ministries is a faith-based non-profit in Durham where folks with and without disabilities share life. We have over 400 active participants and volunteers who participate in various programs: a Farm, a Cafe, a Daytime Program, an Evening Program, and a once-yearly talent show at the DPAC. At the core of Reality`s values are belonging, mutuality, and friendship. Check out a snippet of the fun we have here: The 2016 Reality Ministries Talent Show',
  DistributeAid:
    'The Education track pairs hackers with educators, reaching out to all levels of subjects and skills. In addition to HackDuke sponsored Education events, projects aim to increase visibility of technology and to introduce basic skills to the public.',
  'NC WARN':
    'The Inequality track targets problems regarding both social and economic inequality. Whether it is creating solutions to bridge the income gap, or finding ways to reduce disparities in gender or race, this track is built on the principle that everyone should have the capacity to reach their full potential.'
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowIcon = styled('img')`
  transition: 0.3s ease;
  transform: ${props => (props.open ? 'none' : 'rotate(180deg)')};
  width: 60px;
`;

export default class TrackCard extends React.PureComponent {
  render() {
    const { title, children, isOpen, changePost, hasButton } = this.props;

    const bgColor = bgColors[title];
    const x = offsetX[title];
    const y = offsetY[title];
    const details = trackDetails[title];

    console.log(isOpen);

    return (
      <CardBase
        style={{
          backgroundColor: bgColor
        }}
      >
        <Border style={{ top: x, left: y }} />
        <Header>
          <Title css={TitleFont}>{title}</Title>
          <ArrowIcon open={isOpen} src={upArrow} onClick={changePost} />
        </Header>
        <AnimateHeight duration={300} height={isOpen ? 'auto' : 0}>
          <CardContent css={SecondaryText}>
            <p>{details}</p>
            {/* {hasButton && 
            <Link to='/non-profits'>
              <ButtonLink>Learn More</ButtonLink>
            </Link>} */}
          </CardContent>
        </AnimateHeight>
      </CardBase>
    );
  }
}

const ButtonLink = styled('div')`
  display: inline-block;
  border-radius: 3px;
  padding: 5px 7.5px;
  background-color: white;
  color: black;
  margin-top: 10px;
  z-index: 3;
`;
