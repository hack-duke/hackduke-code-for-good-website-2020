import React from 'react';
import styled from 'react-emotion';

import {
  SectionBase,
  SectionContent,
  SectionTextContent,
  SectionLeftColumn,
  SectionRightColumn,
  PrimaryFont,
  RightContentPadding
} from '../common-styles';
import SectionTitle from '../SectionTitle';

import ScheduleLine from './schedule-line.svg';
import ScheduleLineExt from './schedule-line-ext.svg';
import ScheduleItemCard from './ScheduleItemCard';

import ScheduleTitle from './schedule-title.svg';
import ScheduleBackground from './schedule-bg-images.svg';
import Forward from './forward-arrow.svg';
import Backward from './back-arrow.svg';

import scheduleData from './schedule-data';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 1500,
    extHeightPx: 4096
  })} position: relative;
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
  width: 70%;
  align-items: flex-start;
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

const RiverImg = styled('img')`
  width: 40%;
  height: 1000px;
  position: absolute;
  left: -150px;
  top: 500px;
  transform: translateY(-30%);
`;

var bgStyle = {
  marginLeft: -250
  //position: absolute
};
//NEW*****************************************

export default class Schedule extends React.Component {
  state = {
    selectedDayIndex: true
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

  toggleButton = () => {
    this.setState((prevState, prevProps) => ({
      selectedDayIndex: !prevState.selectedDayIndex
    }));
  };

  render() {
    const { id, sectionColor } = this.props;

    const renderEvents = this.state.selectedDayIndex
      ? scheduleData[0]
      : scheduleData[1];
    var whichDay = this.state.selectedDayIndex
      ? 'Saturday, 11/2'
      : 'Sunday, 11/3';
    var dayArrow = this.state.selectedDayIndex ? (
      <img src={Forward} />
    ) : (
      <img src={Backward} />
    );
    var switcher = this.state.selectedDayIndex ? 'see Sunday' : 'see Saturday';

    return (
      <Container id={id}>
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
        >
          <ScheduleContainer>
            <div style={{ display: 'inline-block' }}>
              <img src={ScheduleTitle} />
            </div>
            <RiverImg src={ScheduleBackground} />

            <OneDay>
              <DayTitle
                onClick={this.toggleButton}
                style={{ cursor: 'pointer' }}
              >
                {whichDay}
              </DayTitle>
              <ScheduleItemCard
                sectionColor={sectionColor}
                events={renderEvents.events}
              />
            </OneDay>
          </ScheduleContainer>
        </div>
      </Container>
    );
  }
}
