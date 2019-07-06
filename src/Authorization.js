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
  height: '90vh',
});

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const Print = styled.img`
  max-width: 800px;
`;

export const Authorization = () => (
  <Root>
    <Center>
      <Title mb={30} >Disable introspection query</Title>
      <Print src={'./img/playground.png'} />
      <Print src={'./img/terminal.png'} />
    </Center>
  </Root>
);