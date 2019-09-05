import React from 'react';
import styled from 'react-emotion';

import {
  SectionBase,
  SectionContent,
  SectionTextContent,
  SectionLeftColumn,
  SectionRightColumn,
  PrimaryFont
} from '../common-styles';
import SectionTitle from '../SectionTitle';

import ScheduleLine from './schedule-line.svg';
import ScheduleLineExt from './schedule-line-ext.svg';
import ScheduleItemCard from './ScheduleItemCard';

import ScheduleTitle from './schedule-title.svg';
import ScheduleBackground from './schedule-bg-images.svg';

import scheduleData from './schedule-data';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 1600,
    extHeightPx: 4096
  })}

  background-image: url(${ScheduleBackground});
  background-position: 50% 10%;

`;

const Day = styled('h3')`
  ${PrimaryFont};
  color: ${props => (props.active ? props.activeColor : 'initial')};
  transition: opacity 0.2s;
  cursor: pointer;

  /* https://css-tricks.com/injecting-line-break/ */
  display: table;

  margin-top: 0;
  margin-bottom: 1em;
  padding-bottom: 0.1em;

  border-bottom: 2px solid
    ${props => (props.active ? props.activeColor : 'transparent')};

  :hover {
    opacity: 0.85;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const locale = 'en-US';

const formatDate = date =>
  `${date.toLocaleDateString(locale, {
    weekday: 'long'
  })}, ${date.toLocaleDateString('en-US', {
    month: 'long'
  })} ${date.getDate()}`;

//NEW*****************************************
const ScheduleContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 25%;
`;

const OneDay = styled('div')`
  margin-top: 40px;
`;

const DayTitle = styled('div')`
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  font-size: 35px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;

var bgStyle = {
  marginLeft: -250
  //position: absolute
};
//NEW*****************************************

export default class Schedule extends React.Component {
  state = {
    selectedDayIndex: 0
  };

  componentDidMount() {
    const now = new Date();

    let i = scheduleData.length;
    while (i-- > 0) {
      if (now >= scheduleData[i].date) {
        this.setState({ selectedDayIndex: i });
        break;
      }
    }
  }

  render() {
    const { id, sectionColor } = this.props;
    const { selectedDayIndex } = this.state;

    return (
      <Container id={id}>
        <ScheduleContainer>
          <div style={{ display: 'inline-block' }}>
            <img src={ScheduleTitle} />
          </div>
          <OneDay>
            <DayTitle>Saturday, November 2nd</DayTitle>
            <ScheduleItemCard
              sectionColor={sectionColor}
              events={scheduleData[0].events}
            />
          </OneDay>

          <OneDay>
            <DayTitle>Sunday, November 3rd</DayTitle>
            <ScheduleItemCard
              sectionColor={sectionColor}
              events={scheduleData[1].events}
            />
          </OneDay>
        </ScheduleContainer>
      </Container>
    );
  }
}
