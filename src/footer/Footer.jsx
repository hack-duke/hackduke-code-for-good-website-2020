import React from 'react';
import styled from 'react-emotion';
import { cx, css } from 'emotion';

import {
  SectionBase,
  TitleFont,
  HideOnMobile,
  MAX_WIDTH
} from '../common-styles';

import TrustBadgeImage from './mlh-trust-badge-2019.svg';
import BottomPath from './bottom-path.svg';
const FooterContainer = styled('div')`
  ${SectionBase({
    heightPx: 900,
    backgroundImage: `url(${BottomPath})`
  })};

  @media screen and (min-width: 1260px) {
    flex-direction: row;
    backgroundImage: 'url(${BottomPath})'
    display: flex;
    height: 100vh;

  }
`;

const MLHBadge = styled('a')`
  width: 100px;
  ${HideOnMobile({ minWidth: 960 })};
  position: absolute;
  right: 144px;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  /* Hack - workaround weird subpixel rendering */
  transform: translateY(-0.5px);
`;

const CenterContainer = styled('div')`
  ${TitleFont};
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  color: white;
  font-weight: bold;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  position: relative;
`;

const CenterContent = styled('div')`
  flex-grow: 1;
  align-self: center;
  text-align: center;
`;

const SocialLinks = styled('div')`
  margin: auto;
  padding-bottom: 12px;
  width: 300px;
`;

const footerLink = css`
  color: white;
  transition: opacity 0.2s;
  text-decoration: none;

  :hover {
    opacity: 0.8;
  }
`;

const iconStyle = css`
  font-size: 32px;
  margin: 0 8px;
  ${footerLink};
`;

const year = new Date().getFullYear();

export default () => (
  <FooterContainer>
    <CenterContainer>
      <CenterContent>
        <SocialLinks>
          <a
            aria-label="Contact Us"
            href="mailto:hackers@hackduke.org"
            className={cx(iconStyle, 'icon-mail-squared')}
          />
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/hackduke"
            target="_blank"
            rel="noopener"
            className={cx(iconStyle, 'icon-facebook-squared')}
          />
          <a
            aria-label="Twitter"
            href="https://twitter.com/hackduke"
            target="_blank"
            rel="noopener"
            className={cx(iconStyle, 'icon-twitter-squared')}
          />
        </SocialLinks>
        &copy; HackDuke {year} &mdash;{' '}
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          rel="noopener"
          css={footerLink}
        >
          Code of Conduct
        </a>
      </CenterContent>
    </CenterContainer>
  </FooterContainer>
);
