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
    heightPx: 1000,
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
  margin-right: 50px;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin-right: 0px;
  }
`;

const OneDay = styled('div')`
  margin-top: 40px;
  width: 100%;
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

const DayOptionContainer = styled('div')`
  display: flex;
  width: 100%;
  border-radius: 4px;
  border: 3px solid white;
  margin-bottom: 20px;
  overflow: hidden;
`;

const DayOption = styled('div')`
  flex-grow: 1;
  text-align: center;
  padding: 0.5rem 0rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  color: ${props => (props.chosen ? '#2B9B99' : '#fff')};
  background-color: ${props => (props.chosen ? '#fff' : 'transparent')};
  font-weight: bold;
  transition: 0.3s ease;
  cursor: pointer;
`;

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

  toggleButton = () => {
    this.setState((prevState, prevProps) => ({
      selectedDayIndex: !prevState.selectedDayIndex
    }));
  };

  toggleChosen = selectedDayIndex => {
    this.setState({
      selectedDayIndex
    });
  };

  render() {
    const { id, sectionColor } = this.props;

    const renderEvents = scheduleData[this.state.selectedDayIndex];

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
              <DayOptionContainer>
                <DayOption
                  chosen={this.state.selectedDayIndex == 0}
                  onClick={() => this.toggleChosen(0)}
                >
                  Sat, 11/2
                </DayOption>
                <DayOption
                  chosen={this.state.selectedDayIndex == 1}
                  onClick={() => this.toggleChosen(1)}
                >
                  Sun, 11/3
                </DayOption>
              </DayOptionContainer>
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
