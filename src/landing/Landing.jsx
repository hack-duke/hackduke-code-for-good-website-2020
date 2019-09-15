import React from 'react';
import styled from 'react-emotion';

import Home from './home-bg.svg';
import HomeMobileTop from './home-bg-mobile-top.svg';
import HomeMobileBottom from './home-bg-mobile-bottom.svg';
import LogoImage from './hackduke-logo.svg';
import TopMountainsImage from './top-mountains.svg';

import { SectionBase, SecondaryText } from '../common-styles';
import { BLUE_PRESSABLE } from '../materials';
import LandingBackground from './landing-background.svg';
import Button from '../Button';

const Container = styled('div')`
  ${SectionBase({
    extHeightPx: 4096
  })};
  max-width: 100%;
  height: 850px;

  background-image: url(${LandingBackground});
  background-position: bottom center;
  position: relative;
  @media screen and (max-width: 1000px) {
    background-image: None;
    max-width: 1000px;
    margin-right: 5%;
  }
`;

const BackgroundWrapper = styled('div')`
  ${SectionBase};
  display: flex;
  height: 100vh;

  @media screen and (min-width: 640px) {
    margin: 0;
    padding-top: 122px;
    padding-bottom: 0;
  }
`;
const LandingContent = styled('div')`
  ${SecondaryText};
  font-size: 1.5em;
  margin: auto 0;
  color: #524f49;
  width: 100%;
  padding-bottom: 40px;
  @media screen and (max-width: 640px) {
    margin: 0;
    padding-top: 122px;
    padding-bottom: 0;
  }
`;

const Logo = styled('img')`
  width: 100%;
  margin: 0 auto;
  /* padding-bottom: 12em; */
  padding-top: 20px;
  display: block;
  @media screen and (min-width: 480px) {
    max-width: 1000px;
  }

  @media screen and (max-width: 1000px) {
    padding-bottom: 0;
    padding-top: 0;
    margin-bottom: 40px;
  }
`;
const Date = styled('div')`
  padding-left: 1000px
  margin-right: 100px
  padding-bottom: 3em
  }
`;
const TopMountains = styled('img')`
  width: 10%;
  margin-bottom: 1.5em;
  display: block;
  @media screen and (min-width: 480px) {
    max-width: 500px;
  }
`;
const ButtonWrapper = styled('div')`
  position: absolute;
  bottom: 30%;
  display: block;
  right: 22%;

  @media screen and (max-width: 1000px) {
    position: relative;
    bottom: 0;
    right: 0;
    width: 100%;
    text-align: center;
  }
`;
export default ({ id }) => (
  <Container id={id}>
    <LandingContent>
      <Logo alt="HackDuke: Code for Good" src={LogoImage} />
      <ButtonWrapper>
        <Date>
          <div>November 2-3 2019 | Durham, NC</div>
          <div>
            Come <b>Code for Good</b> with us!
          </div>
        </Date>
        <Button
          material={BLUE_PRESSABLE}
          href="https://hackduke.typeform.com/to/i83hAq"
          target="_blank"
        >
          Register
        </Button>
      </ButtonWrapper>
    </LandingContent>
  </Container>
);
