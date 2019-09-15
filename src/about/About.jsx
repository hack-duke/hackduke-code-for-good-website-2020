import React, { Component } from 'react';
import styled from 'react-emotion';

import { SectionBase } from '../common-styles';
import SectionTitle from '../SectionTitle';
import AboutSlide from './AboutSlide';
import CenterContainer from './CenterContainer';

import mapImg from './map.svg';
import aboutTitleImg from './about-title.svg';
import aboutSlide1 from './about-1.svg';
import aboutSlide2 from './about-2.svg';
import aboutSlide3 from './about-3.svg';

import mobileAbout1 from './mobile-about-1.svg';
import mobileAbout2 from './mobile-about-2.svg';
import mobileAbout3 from './mobile-about-3.svg';

import newMap from './map.png';

import leftArrow from './left-arrow.svg';
import rightArrow from './right-arrow.svg';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 600,
    extHeightPx: 4096
  })};

  @media screen and (min-width: 1260px) {
  }
`;

const AboutTitle = styled('img')`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const BodyContainer = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 750px;
  margin: 0 auto;
`;

const MapImg = styled('img')`
  width: 100%;
  transform-origin: top;
  height: 750px;

  @media screen and (max-width: 875px) {
    height: 500px;
  }

  @media screen and (max-width: 550px) {
    height: 500px;
  }
`;

const ArrowButton = styled('div')`
  z-index: 1;
  border-radius: 50%;
  background-color: #c4c4c4;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  cursor: pointer;
  transition: 0.3s ease;
  color: #353535;
  font-size: 25px;
  user-select: none;

  :hover {
    background-color: #ea7e69;
  }

  @media screen and (max-width: 550px) {
    width: 40px;
    height: 40px;
  }
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 0;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 550px) {
    left: 5px;
  }
`;

const RightArrowButton = styled(ArrowButton)`
  right: 0;
  transform: translate(50%, -50%);

  @media screen and (max-width: 550px) {
    right: 5px;
  }
`;

const ArrowIcon = styled('img')`
  z-index: 2;
  width: 100%;
`;

const SlideContainer = styled('div')`
  position: absolute;
  width: 60%;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
`;

const SliderButtonContainer = styled('div')`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 125px;
  justify-content: space-between;

  @media screen and (max-width: 875px) {
    bottom: 50px;
    width: 100px;
  }
`;

const SliderButton = styled('div')`
  background-color: ${props =>
    props.idx === props.currIdx ? '#EA7E69' : 'transparent'};
  border: ${props =>
    props.idx == props.currIdx ? 'none' : '3px solid #C4C4C4'};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease;
`;

class About extends Component {
  state = {
    slideIdx: 0
  };

  changeToSlide = idx => {
    this.setState({
      slideIdx: idx < 0 ? 3 + idx : idx % 3
    });
  };

  render() {
    const { id, sectionColor } = this.props;
    const slideElems = slides.map((slide, i) => {
      return (
        <AboutSlide
          key={i}
          img={slide.img}
          text={slide.text}
          idx={i}
          currIdx={this.state.slideIdx}
          title={slide.title}
          mobileImg={slide.mobileImg}
        />
      );
    });

    return (
      <Container id={id}>
        <BodyContainer>
          <AboutTitle src={aboutTitleImg} />
          <MapImg src={newMap} />
          <LeftArrowButton
            onClick={() => this.changeToSlide(this.state.slideIdx - 1)}
          >
            <ArrowIcon src={leftArrow} />
          </LeftArrowButton>
          <RightArrowButton
            onClick={() => this.changeToSlide(this.state.slideIdx + 1)}
          >
            <ArrowIcon src={rightArrow} />
          </RightArrowButton>

          <SlideContainer>
            <div
              style={{ posiiton: 'relative', width: '100%', height: '100%' }}
            >
              {slideElems}
            </div>
          </SlideContainer>
          <SliderButtonContainer>
            <SliderButton
              idx={0}
              currIdx={this.state.slideIdx}
              onClick={() => this.changeToSlide(0)}
            />
            <SliderButton
              idx={1}
              currIdx={this.state.slideIdx}
              onClick={() => this.changeToSlide(1)}
            />
            <SliderButton
              idx={2}
              currIdx={this.state.slideIdx}
              onClick={() => this.changeToSlide(2)}
            />
          </SliderButtonContainer>
        </BodyContainer>
      </Container>
    );
  }
}

export default About;

const slides = [
  {
    img: aboutSlide1,
    mobileImg: mobileAbout1,
    title: 'Exploring the intersection between tech & social good',
    text:
      "The core principle behind hacking for social good is collaboration, and HackDuke's project tracks provide an avenue to collaborate with each other, with initiatives at their university and with community organizations."
  },
  {
    img: aboutSlide2,
    mobileImg: mobileAbout2,
    title: 'Collaboration not competition',
    text:
      "HackDuke is not just about building meaningful projects. It's also an open forum to discuss, share and bring to life ideas that aim to make a positive impact on social issues. Look forward to working with experts from non-profits and coding alongside mentors from tech companies!"
  },
  {
    img: aboutSlide3,
    mobileImg: mobileAbout3,
    title: 'Giving back',
    text:
      "HackDuke encourages students to venture beyond the classroom. Learn how your skills can be used to make a difference in other people's lives. Tracks enable members to collaborate while providing an alleyway to partnership with peers, local organizations, nonprofits and universities to continue working towards the cause."
  }
];
