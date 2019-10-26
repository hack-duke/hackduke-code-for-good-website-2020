import React from 'react';
import styled from 'react-emotion';

export default ({ closeModal, text }) => {
  return (
    <Veil>
      <div style={{ height: '100%', width: '100%', paddingLeft: '20%' }}>
        <Container>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '-30px'
            }}
          >
            <ExitButton onClick={closeModal}>x</ExitButton>
          </div>
          {text.map(({ title, name, loc }) => (
            <div>
              <ModalTextTitle>{title}</ModalTextTitle>
              <ModalTextName>{name}</ModalTextName>
              <ModalTextLoc>{loc}</ModalTextLoc>
            </div>
          ))}
        </Container>
      </div>
    </Veil>
  );
};

const Veil = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 50px;
  z-index: 100;
`;

const Container = styled('div')`
  position: relative;
  width: 80%;
  height: 100%;
  background-color: white;
  border-radius: 6px;
`;

const ExitButton = styled('p')`
  display: inline-block;
  color: black;
  font-size: 30px;
  cursor: pointer;
  font-family: sans-serif;
  margin-top: 20px;
  margin-right: 30px;
  user-select: none;
`;

const ModalTextTitle = styled('h1')`
  font-size: 1.15em;
  font-family: sans-serif;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 4px;
`;

const ModalTextName = styled('h2')`
  font-size: 0.8em;
  font-family: sans-serif;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 4px;
`;

const ModalTextLoc = styled('p')`
  font-size: 0.8em;
  font-family: sans-serif;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 18px;
`;
