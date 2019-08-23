import React from 'react';

import styled from 'react-emotion';

import Divider from './Divider';
import { TitleFont, SectionBase } from './common-styles';

const Title = styled('div')`
  ${TitleFont};
  margin: 0 auto;
  font-size: 2.5em;
  font-weight: bold;

  color: #2b2b2b;
  padding-top: 0.33em;

  @media screen and (min-width: 640px) {
    padding-top: 0.0875em;

    color: ${props => props.sectionColor};
  }
`;

export default ({ children, sectionColor }) => (
  <React.Fragment>
    <Title sectionColor={sectionColor}>{children}</Title>
    <Divider color={sectionColor} hideOnDesktop={true} />
  </React.Fragment>
);
