import React from 'react';
import styled from 'react-emotion';

import AppianLogo from './img/appian-logo.svg';
import ScimedLogo from './img/scimed.png';
import WolframLogo from './img/wolfram.svg';

import FuquaLogo from './img/fuqua.svg';
import PrattLogo from './img/pratt.svg';
import IIDLogo from './img/iiD_logo.svg';

import GlobalBankersLogo from './img/gbankers.png';
import CapitalOneLogo from './img/capital-one.svg';

import MicrosoftLogo from './img/microsoft-logo.svg';
import OptumLogo from './img/optum-logo.svg';
import InnovationCoLabLogo from './img/innovation-colab.png';

import FacebookLogo from './img/fb-family.svg';
import GoogleLogo from './img/google-logo.svg';
import PalantirLogo from './img/palantir-logo.svg';

import StickerMuleLogo from './img/stickermule.svg';
import EpicLogo from './img/epic_logo.png';
import DukeCSLogo from './img/duke-cs-logo.svg';
import ZwelisLogo from './img/zwelis-logo.png';

import HouzzLogo from './img/houzz.svg';
import MastercardLogo from './img/mastercard.svg';
import GSKLogo from './img/gsk.svg';
import ZuoraLogo from './img/zuora-logo.svg';
import LineageLogo from './img/lineage_logo.svg';
import UizardLogo from './img/uizard.svg';
import JuvoLogo from './img/juvo.png';

const LogoRow = styled('div')`
  display: flex;
  padding-bottom: 15px;
  max-height: 108px;

  @media screen and (min-width: 480px) {
    padding-bottom: 25px;
  }

  @media screen and (min-width: 1024px) {
    padding-bottom: 30px;
  }

  :last-child {
    padding-bottom: 0;
  }
`;

const LogoWrapper = styled('a')`
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-top: 0;
  justify-content: center;
`;

const LogoImage = styled('img')`
  width: 50%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  -webkit-user-drag: none;
`;

const Logo = ({ alt, src, href }) => (
  <LogoWrapper href={href} target="_blank" rel="noopener">
    <LogoImage alt={alt} src={src} />
  </LogoWrapper>
);

export default () => (
  <React.Fragment>
    <LogoRow>
      <Logo
        alt="Pratt School of Engineering"
        src={PrattLogo}
        href="https://pratt.duke.edu/"
      />
      <Logo
        alt="Houzz"
        src={HouzzLogo}
        href="https://www.houzz.com/jobs#career"
      />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Capitol One"
        src={CapitalOneLogo}
        href="https://campus.capitalone.com/"
      />
      <Logo
        alt="Facebook"
        src={FacebookLogo}
        href="https://www.facebook.com/careers/students-and-grads/"
      />
      <Logo
        alt="GSK"
        src={GSKLogo}
        href="https://us.gsk.com/en-us/careers/apprentices-students-and-graduates/internships-and-co-ops/"
      />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Lineage Logistics"
        src={LineageLogo}
        href="https://lineagelogistics.com/careers"
      />
      <Logo
        alt="Mastercard"
        src={MastercardLogo}
        href="https://www.mastercard.us/en-us/about-mastercard/careers/internships-college-hires.html"
      />
      <Logo
        alt="Zuora"
        src={ZuoraLogo}
        href="https://www.zuora.com/about/careers/"
      />
    </LogoRow>
    <LogoRow>
      <Logo alt="Rhodes iiD" src={IIDLogo} href="https://uizard.io/career/" />
      <Logo
        alt="Appian"
        src={AppianLogo}
        href="https://www.appian.com/careers/"
      />
      <Logo alt="Juvo" src={JuvoLogo} href="https://juvo.com/careers/" />
    </LogoRow>
    <LogoRow>
      <Logo alt="Epic" src={EpicLogo} href="https://careers.epic.com/" />
      <Logo
        alt="StickerMule"
        src={StickerMuleLogo}
        href="https://stickermule.com/"
      />
      <Logo alt="Uizard" src={UizardLogo} href="https://uizard.io/career/" />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Duke Computer Science"
        src={DukeCSLogo}
        href="https://www.cs.duke.edu/"
      />
      <Logo
        alt="Fuqua School of Business"
        src={FuquaLogo}
        href="https://www.fuqua.duke.edu/"
      />
    </LogoRow>
  </React.Fragment>
);
