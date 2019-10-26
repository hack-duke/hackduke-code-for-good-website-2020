import React from 'react';
import styled from 'react-emotion';

import AppianLogo from './img/appian-logo.svg';

import FuquaLogo from './img/fuqua.svg';
import PrattLogo from './img/pratt.svg';
import IIDLogo from './img/iiD_logo.svg';
import CodeplusLogo from './img/codeplus.svg';
import ColabLogo from './img/co-lab.svg';
import OITLogo from './img/oit.svg';
import ECELogo from './img/ece.svg';
import MEMSLogo from './img/mems.svg';
import ISSLogo from './img/iss.svg';
import BiostatLogo from './img/biostat.png';
import DUMLLogo from './img/duke-ml.svg';

import CapitalOneLogo from './img/capital-one.svg';

import FacebookLogo from './img/fb-family.svg';
import GoogleLogo from './img/google-logo.svg';

import StickerMuleLogo from './img/stickermule.svg';
import EpicLogo from './img/epic_logo.png';
import DukeCSLogo from './img/duke-cs-logo.svg';
import ZwelisLogo from './img/zwelis-logo.png';
import CitadelLogo from './img/citadel.svg';

import HouzzLogo from './img/houzz.svg';
import MastercardLogo from './img/mastercard.svg';
import GSKLogo from './img/gsk.svg';
import ZuoraLogo from './img/zuora-logo.svg';
import LineageLogo from './img/lineage_logo.svg';
import UizardLogo from './img/uizard.svg';
import JuvoLogo from './img/juvo.png';
import SpikeballLogo from './img/spikeball.svg';
import LinodeLogo from './img/linode.svg';
import TastyTradeLogo from './img/tastytrade.svg';
import CIFLogo from './img/CIF.png';
import CrossCommLogo from './img/crosscomm.png';
import SmartcarLogo from './img/smartcar.svg';
import GoogleCloudLogo from './img/google-cloud.svg';

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
        alt="GSK"
        src={GSKLogo}
        href="https://us.gsk.com/en-us/careers/apprentices-students-and-graduates/internships-and-co-ops/"
      />
    </LogoRow>

    <LogoRow>
      <Logo
        alt="Facebook"
        src={FacebookLogo}
        href="https://www.facebook.com/careers/students-and-grads/"
      />
      <Logo
        alt="Mastercard"
        src={MastercardLogo}
        href="https://www.mastercard.us/en-us/about-mastercard/careers/internships-college-hires.html"
      />
      <Logo
        alt="Lineage Logistics"
        src={LineageLogo}
        href="https://lineagelogistics.com/careers"
      />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Citadel"
        src={CitadelLogo}
        href="https://www.citadel.com/careers/students/"
      />
      <Logo
        alt="Zuora"
        src={ZuoraLogo}
        href="https://www.zuora.com/about/careers/"
      />
      <Logo
        alt="Duke Electrical and Computer Engineering"
        src={ECELogo}
        href="https://ece.duke.edu/"
      />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Duke Office of Information Technology"
        src={OITLogo}
        href="https://oit.duke.edu/"
      />
      <Logo
        alt="Duke Code +"
        src={CodeplusLogo}
        href="https://codeplus.duke.edu/"
      />
      <Logo alt="Rhodes iiD" src={IIDLogo} href="https://bigdata.duke.edu/" />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Duke Innovation Co-lab"
        src={ColabLogo}
        href="https://colab.duke.edu/"
      />
      <Logo alt="Juvo" src={JuvoLogo} href="https://juvo.com/careers/" />
      <Logo
        alt="Appian"
        src={AppianLogo}
        href="https://www.appian.com/careers/"
      />
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
      <Logo
        alt="Duke Information Science and Studies"
        src={ISSLogo}
        href="https://iss-staging.trinity.duke.edu/"
      />
    </LogoRow>
    <LogoRow>
      <Logo alt="Epic" src={EpicLogo} href="https://careers.epic.com/" />
      <Logo alt="Linode" src={LinodeLogo} href="https://www.linode.com/" />
      <Logo
        alt="Duke Mechanical Engineering & Materials Science"
        src={MEMSLogo}
        href="https://mems.duke.edu/"
      />
    </LogoRow>

    <LogoRow>
      <Logo
        alt="Duke Biostatistics and Bioinformatics"
        src={BiostatLogo}
        href="https://biostat.duke.edu/"
      />
      <Logo
        alt="TastyTrade"
        src={TastyTradeLogo}
        href="https://www.tastytrade.com"
      />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Coding it Forward"
        src={CIFLogo}
        href="https://www.codingitforward.com/fellowship"
      />
      <Logo alt="Smartcar" src={SmartcarLogo} href="https://www.smartcar.io/" />
      <Logo
        alt="CrossComm"
        src={CrossCommLogo}
        href="https://www.crosscomm.com/"
      />
      <Logo alt="Uizard" src={UizardLogo} href="https://uizard.io/" />
    </LogoRow>
    <LogoRow>
      <Logo alt="Spikeball" src={SpikeballLogo} href="https://spikeball.com/" />
      <Logo
        alt="StickerMule"
        src={StickerMuleLogo}
        href="http://hackp.ac/mlh-stickermule-hackathons"
      />
      <Logo
        alt="Google Cloud"
        src={GoogleCloudLogo}
        href="https://cloud.google.com/"
      />
      <Logo
        alt="Duke Undergraduate Machine Learning"
        src={DUMLLogo}
        href="https://dukeml.org/"
      />
    </LogoRow>
  </React.Fragment>
);
