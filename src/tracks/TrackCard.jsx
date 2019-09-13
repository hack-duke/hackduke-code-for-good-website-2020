import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { SecondaryText, ShadowItem, TitleFont } from '../common-styles';
import AnimateHeight from 'react-animate-height';

const zeroBottomMargin = css`
  margin-bottom: 0;
`;

const CardBase = styled('div')`
  padding: 25px;
  color: white;
  position: relative;
  z-index: 2;
  margin: 5pt;
  width: 90%;
  left: 5%;
`;

const Border = styled('div')`
  position: absolute;
  z-index: 2;
  border: 3px solid white;
  width: 100%;
  height: 100%;
  padding: 10px 0 10px 10px;
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
  'Health & Wellness': '#2B9B99',
  Education: '#E68560',
  Inequality: '#678BE1',
  'Energy & Environment': '#C06880'
};

const offsetY = {
  'Health & Wellness': '7px',
  Education: '-9px',
  Inequality: '6px',
  'Energy & Environment': '-8px'
};

const offsetX = {
  'Health & Wellness': '8px',
  Education: '7px',
  Inequality: '-9px',
  'Energy & Environment': '-7px'
};

const trackDetails = {
  'Health & Wellness':
    'The Health track allows hackers to work with various kinds of health related data and connect with mentors from the intersection of health and technology. More than ever before, technology today is in a prime position to improve the quality, efficiency, and accessibility of health care.',
  Education:
    'The Education track pairs hackers with educators, reaching out to all levels of subjects and skills. In addition to HackDuke sponsored Education events, projects aim to increase visibility of technology and to introduce basic skills to the public.',
  Inequality:
    'The Inequality track targets problems regarding both social and economic inequality. Whether it is creating solutions to bridge the income gap, or finding ways to reduce disparities in gender or race, this track is built on the principle that everyone should have the capacity to reach their full potential.',
  'Energy & Environment':
    'The Energy track encompasses a technical perspective to deal with large issues impacting energy use, allocation and environmental regulations. Example ideas include machine learning for resource extraction, the use of green energy and enforcing environmental policy.'
};

export default class TrackCard extends React.PureComponent {
  state = {
    opened: false
  };

  toggleOpened = () => this.setState({ opened: !this.state.opened });

  render() {
    const { title, children } = this.props;

    const bgColor = bgColors[title];
    const x = offsetX[title];
    const y = offsetY[title];
    const details = trackDetails[title];

    let { opened } = this.state;

    return (
      <CardBase
        style={{
          backgroundColor: bgColor
        }}
      >
        <Border onClick={this.toggleOpened} style={{ top: x, left: y }} />
        <Title css={TitleFont}>{title}</Title>
        <AnimateHeight duration={300} height={opened ? 'auto' : 0}>
          <CardContent css={SecondaryText}>{details}</CardContent>
        </AnimateHeight>
      </CardBase>
    );
  }
}
