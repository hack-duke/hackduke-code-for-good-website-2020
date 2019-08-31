import React from 'react';
import styled from 'react-emotion';

import { SecondaryText, TitleFont } from '../common-styles';

const FAQItem = styled('div')``;

const FAQTitle = styled('h2')`
  ${TitleFont};
  font-weight: bold;
  font-size: 1.5em;
  color: white;
`;

const FAQText = styled('div')`
  ${SecondaryText};
  font-size: 1.25em;
  color: white;
`;

export default ({ title, children }) => (
  <FAQItem>
    <FAQTitle>{title}</FAQTitle>
    <FAQText>{children}</FAQText>
  </FAQItem>
);
