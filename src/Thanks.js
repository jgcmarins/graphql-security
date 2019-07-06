import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

export const Root = styled.div([], {
  width: '50vw',
  height: '70vh',
});

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ThanksText = styled.span`
  font-size: 50px;
  color: #ffffff;
`;

const HiringText = styled.span`
  font-size: 100px;
  color: #25D7FD;
  margin-left: 75px;
  margin-top: 50px;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Foton = styled.img`
  max-width: 300px;
  ${space}
`;


export const Thanks = () => (
  <Root>
    <Center>
      <ThanksText>Thanks!</ThanksText>
    </Center>
    <SpaceBetween>
      <HiringText>We are hiring!</HiringText>
    </SpaceBetween>
    <Center>
      <Foton mt={30} src={'./img/foton.png'} />
    </Center>
  </Root>
);