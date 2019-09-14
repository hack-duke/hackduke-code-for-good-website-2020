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
    heightPx: 900
  })};
  background-size: cover;
  background-image: url(${BottomPath});

  @media screen and (min-width: 1260px) {
  }

  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  width: 300px;
  padding-bottom: 12px;
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
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: '350px'
      }}
    >
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
    </div>
  </FooterContainer>
);
