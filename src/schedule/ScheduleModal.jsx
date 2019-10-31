import React from 'react';
import styled from 'react-emotion';

export default ({ closeModal, text }) => {
  return (
    <Veil>
      <div style={{ height: '100%', width: '100%', paddingLeft: '10%' }}>
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
          {text.map(({ title, name, loc, speakerBlurb, workshop }) => (
            <div>
              <ModalTextTitle>{title}</ModalTextTitle>
              <ModalTextSub>{loc}</ModalTextSub>
              <ModalTextBody>{workshop ? workshop : null}</ModalTextBody>
              <ModalTextSub>{name ? 'Speaker: ' + name : null}</ModalTextSub>
              <ModalTextBody>
                {speakerBlurb ? speakerBlurb : null}
              </ModalTextBody>
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
  width: 90%;
  height: 100%;
  background-color: white;
  border-radius: 6px;
  overflow-y: auto;
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
  font-size: 1.5em;
  font-family: 'Cabin', sans-serif;
  color: #34357b;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 4px;
`;

const ModalTextSub = styled('h2')`
  font-size: 0.9em;
  color: #303242B;
  font-family: sans-serif;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 4px;
`;

const ModalTextBody = styled('p')`
  font-size: 0.9em;
  font-family: sans-serif;
  color: #555;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 18px;
`;
