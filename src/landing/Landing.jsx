import React from 'react';
import styled from 'react-emotion';

import Home from './home-bg.svg';
import HomeMobileTop from './home-bg-mobile-top.svg';
import HomeMobileBottom from './home-bg-mobile-bottom.svg';
import LogoImage from './hackduke-logo.svg';
import TopMountainsImage from './top-mountains.svg';

import { SectionBase, SecondaryText } from '../common-styles';
import { PURPLE_PRESSABLE } from '../materials';
import Button from '../Button';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 900
  })};
  display: flex;
  height: 100vh;

  @media screen and (min-width: 640px) {
    backgroundImage: ${TopMountainsImage}
    display: block;
    height: auto;
  }
`;

const LandingContent = styled('div')`
  ${SecondaryText};
  font-size: 1.5em;
  margin: auto 0;
  width: 100%;
  padding-bottom: 40px;
  @media screen and (min-width: 640px) {
    margin: 0;
    padding-top: 122px;
    padding-bottom: 0;
  }
`;

const Logo = styled('img')`
  width: 100%;
  margin-bottom: 1.5em;
  display: block;
  @media screen and (min-width: 480px) {
    max-width: 1000px;
  }
`;
const Date = styled('div')`
  padding-left: 1000px
  margin-right: 100px
  padding-bottom: 3em;
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
  width: 100%;
  margin-bottom: 1.5em;
  display: block;

  @media screen and (min-width: 480px) {
    max-width: 1000px;
    margin-left: 800px;
  }
`;
export default ({ id }) => (
  <Container id={id}>
    <LandingContent>
      <Logo alt="HackDuke: Code for Good" src={LogoImage} />
      <ButtonWrapper>
        <Date>
          <div>November 2-3 2019|Durham,</div>
          <div>NC Come Code for Good with us!</div>
        </Date>
        <Button
          material={PURPLE_PRESSABLE}
          href="https://hackduke-2018.devpost.com/submissions"
        >
          Register
        </Button>
      </ButtonWrapper>
    </LandingContent>
  </Container>
);
