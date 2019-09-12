import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { SecondaryText, ShadowItem, TitleFont } from '../common-styles';

export default class TrackSign extends React.Component {
  state = {
    opened: false
  };

  toggleOpened = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    const { opened } = this.state;
    const { title, details } = this.props;
    return (
      <button
        id={title}
        className={opened ? 'expanded' : 'sign'}
        onClick={this.toggleOpened}
        style={{
          backgroundColor: '#F00',
          width: '30%',
          left: '35%',
          position: 'relative',
          zIndex: 2,
          marginBottom: 20
        }}
      >
        <h4>{title}</h4>
        <div>{details}</div>
      </button>
    );
  }
}
