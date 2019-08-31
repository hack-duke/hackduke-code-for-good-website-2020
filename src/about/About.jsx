import React, { Component } from 'react';
import styled from 'react-emotion';

import { SectionBase } from '../common-styles';
import SectionTitle from '../SectionTitle';
import AboutSlide from './AboutSlide';
import CenterContainer from './CenterContainer';

import mapImg from './map.svg';
import aboutTitleImg from './about-title.svg';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 600,
    extHeightPx: 4096
  })};

  padding-top: 100px;
  padding-bottom: 100px;

  @media screen and (min-width: 1260px) {
  }
`;

const AboutTitle = styled('img')`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BodyContainer = styled('div')`
  position: relative;
  width: 100%;
`;

const MapImg = styled('img')`
  object-fit: contain;
  width: 100%;
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

  :hover {
    background-color: #ea7e69;
  }
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 0;
  transform: translate(-50%, -50%);
`;

const RightArrowButton = styled(ArrowButton)`
  right: 0;
  transform: translate(50%, -50%);
`;

const SlideContainer = styled('div')`
  position: absolute;
  width: 60%;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
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
        />
      );
    });

    return (
      <Container id={id}>
        <BodyContainer>
          <AboutTitle src={aboutTitleImg} />
          <MapImg src={mapImg} />
          <LeftArrowButton
            onClick={() => this.changeToSlide(this.state.slideIdx - 1)}
          >
            <CenterContainer>&larr;</CenterContainer>
          </LeftArrowButton>
          <RightArrowButton
            onClick={() => this.changeToSlide(this.state.slideIdx + 1)}
          >
            <CenterContainer>&rarr;</CenterContainer>
          </RightArrowButton>

          <SlideContainer>
            <div
              style={{ posiiton: 'relative', width: '100%', height: '100%' }}
            >
              {slideElems}
            </div>
          </SlideContainer>
        </BodyContainer>
      </Container>
    );
  }
}

export default About;

const slides = [
  {
    img: 'https://avatars2.githubusercontent.com/u/8008350?s=460&v=4',
    text: 'The god'
  },
  {
    img:
      'http://cdn.akc.org/content/article-body-image/shiba_inu_cute_puppies.jpg',
    text: 'Suh cyute'
  },
  {
    img:
      'https://animemotivation.com/wp-content/uploads/2018/02/cute-anime-girl.jpg.webp',
    text: 'For Daniel'
  }
];
