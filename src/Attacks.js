import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Root = styled.div([], {
  width: '50vw',
  height: '70vh',
});

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const AttacksKinds = styled.span`
  font-size: 30px;
  color: #25D7FD;
  ${space} 
`;

export const Attacks = () => (
  <Root>
    <Center>
      <Title mt={60}>What kinds of attacks?</Title>
      <AttacksKinds mt={60} >Resource exhaustion attacks</AttacksKinds>
      <AttacksKinds mt={60} >Deep nested relationships</AttacksKinds>
      <AttacksKinds mt={60} >What else?</AttacksKinds>
    </Center>
  </Root>
);