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

const GitHubUrl = styled.span`
  font-size: 30px;
  color: #25D7FD;
  ${space} 
`;

const GitHubImage = styled.img`
  max-width: 800px;
`;

export const DisableIntrospection = () => (
  <Root>
    <Center>
      <Title mb={30} >Disable introspection query</Title>
      <GitHubImage src={'./img/disableIntrospection.png'} />
      <GitHubUrl mt={30} >https://github.com/helfer/graphql-disable-introspection</GitHubUrl>
    </Center>
  </Root>
);