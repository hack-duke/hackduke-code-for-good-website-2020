import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { TitleFont, ShadowItem } from '../common-styles';

const dateColSmWidth = '168px';
const dateColMedWidth = '190px';
const dateColLgWidth = '210px';

const CardBase = styled('div')`
  flex-grow: 1;
  flex-basis: 0;
  float: right;

  background-size: ${dateColSmWidth};

  @media screen and (min-width: 480px) {
    background-size: ${dateColMedWidth};
  }

  @media screen and (min-width: 900px) {
    background-size: ${dateColLgWidth};
  }
`;

const rowItemPadding = css`
  padding: 10px 15px;

  @media screen and (min-width: 480px) {
    padding: 3px 20px;
  }

  @media screen and (min-width: 900px) {
    padding: 3px 20px;
  }
`;

const EventTime = styled('div')`
  flex-basis: ${dateColSmWidth};

  @media screen and (min-width: 480px) {
    flex-basis: ${dateColMedWidth};
  }

  @media screen and (min-width: 900px) {
    flex-basis: ${dateColLgWidth};
  }

  flex-grow: 0;
  flex-shrink: 0;
  text-align: left;
  font-weight: bold;
  ${rowItemPadding};
`;

const EventDetails = styled('div')`
  ${rowItemPadding};
`;

const EventDetailsText = styled('div')`
  display: block;
  font-size: 0.9em;
  color: #555;
  ${props =>
    props.primary &&
    css`
      font-weight: bold;
      margin-bottom: 0.33em;
      font-size: 1em;
      color: white;
    `};
`;

const EventRow = styled('div')`
  display: flex;
  font-size: 1.0333em;
  ${TitleFont};
  color: #2b2b2b;

  @media screen and (min-width: 480px) {
    font-size: 1.1em;
  }

  line-height: 1.44em;

  :first-child > div {
    padding-top: 20px;
  }

  :last-child > div {
    padding-bottom: 20px;
  }
`;

export default ({ sectionColor, events }) => (
  <CardBase color={sectionColor}>
    {events.map(({ time, name, locations }) => (
      <EventRow key={time + name}>
        <EventTime primaryColor="white">{time}</EventTime>
        <EventDetails>
          <EventDetailsText primary={true} primaryColor="white">
            {name}
          </EventDetailsText>
          {locations &&
            locations.map(loc => (
              <EventDetailsText key={loc}>{loc}</EventDetailsText>
            ))}
        </EventDetails>
      </EventRow>
    ))}
  </CardBase>
);
