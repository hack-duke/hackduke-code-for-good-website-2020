import React from 'react';
import styled from 'react-emotion';

export default ({ img, text, currIdx, idx }) => {
  console.log(currIdx);
  console.log(idx);

  return (
    <Container idx={idx} currIdx={currIdx}>
      <ImgContainer>
        <SlideImg src={img} />
      </ImgContainer>
      <TextContainer>{text}</TextContainer>
    </Container>
  );
};

const Container = styled('div')`
  padding: 40px;
  opacity: ${props => (props.currIdx == props.idx ? '1' : '0')};
`;

const ImgContainer = styled('div')`
  width: 100%;
  margin-bottom: 40px;
`;

const SlideImg = styled('img')`
  object-fit: contain;
  width: 100%;
`;

const TextContainer = styled('div')``;
