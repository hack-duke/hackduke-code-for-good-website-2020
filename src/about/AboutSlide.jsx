import React from 'react';
import styled from 'react-emotion';

export default ({ img, text, title, currIdx, idx }) => {
  console.log(currIdx, idx);

  return (
    <Container idx={idx} currIdx={currIdx}>
      <ImgContainer>
        <SlideImg src={img} />
      </ImgContainer>
      <TextTitle>{title}</TextTitle>
      <TextContainer>{text}</TextContainer>
    </Container>
  );
};

const Container = styled('div')`
  transition: 0.5s ease;
  opacity: ${props => (props.currIdx === props.idx ? '1' : '0')};
  position: absolute;
  top: 0;
  left: 0;
`;

const ImgContainer = styled('div')`
  width: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 875px) {
    display: none;
  }
`;

const SlideImg = styled('img')`
  object-fit: contain;
  width: 100%;
  margin: 0 auto;
`;

const TextTitle = styled('h2')`
  text-align: center;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
`;

const TextContainer = styled('div')`
  text-align: center;
  line-height: 20pt;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 550px) {
    line-height: 15pt;
  }
`;
