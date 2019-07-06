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

const OtherKinds = styled.span`
  font-size: 30px;
  color: #25D7FD;
  ${space} 
`;

export const Other = () => (
  <Root>
    <Center>
      <Title mt={60}>Other solutions (infrastructure)</Title>
      <OtherKinds mt={50} >Any HTTP security solution works with GraphQL</OtherKinds>
      <OtherKinds mt={50} >Use a token to hide /graphql endpoint (proxy)</OtherKinds>
      <OtherKinds mt={50} >Tools: Cloudflare, AWS</OtherKinds>
      <OtherKinds mt={50} >What else?</OtherKinds>
    </Center>
  </Root>
);