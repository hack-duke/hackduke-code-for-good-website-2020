import React from 'react';
import styled from 'react-emotion';

export default ({ closeModal, text }) => {
  return (
    <Veil>
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <ExitButton onClick={closeModal}>x</ExitButton>
        </div>
        <ModalText>{text}</ModalText>
      </Container>
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
  width: 100%;
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

const ModalText = styled('p')`
  font-size: 20px;
  padding: 20px;
  font-family: sans-serif;
`;
