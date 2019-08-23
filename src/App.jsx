import React from 'react';

import Navbar from './nav/Navbar';
import Landing from './landing/Landing';
import About from './about/About';
import Tracks from './tracks/Tracks';
import Schedule from './schedule/Schedule';
import Campfire from './campfire/Campfire';
import FAQs from './faqs/FAQs';
import Sponsors from './sponsors/Sponsors';
import Footer from './footer/Footer';

import './assets/css/app.css';
import './assets/css/fontello.css';

const sections = [
  {
    title: 'Home',
    id: 'landing',
    sectionColor: '#afe0d0',
    Component: Landing
  },
  {
    title: 'About',
    id: 'about',
    sectionColor: '#ACC0F9',
    Component: About
  },
  {
    title: 'Tracks',
    id: 'tracks',
    sectionColor: '#FECA7D',
    Component: Tracks
  },
  {
    title: 'Schedule',
    id: 'Schedule',
    sectionColor: '#2B9B99',
    Component: Schedule
  },
  {
    title: 'Campfire',
    id: 'Campfire',
    sectionColor: '#A94A64',
    Component: Campfire
  },
  {
    title: 'FAQs',
    id: 'faqs',
    sectionColor: '#3C257D',
    Component: FAQs
  },
  {
    title: 'Sponsors',
    id: 'sponsors',
    sectionColor: '#0F1343',
    Component: Sponsors
  }
];

export default () => (
  <React.Fragment>
    <Navbar navItems={sections} />
    {sections.map(({ title, id, sectionColor, Component }) => (
      <Component id={id} key={id} sectionColor={sectionColor} />
    ))}
    <Footer />
  </React.Fragment>
);
