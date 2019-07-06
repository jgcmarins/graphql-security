import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
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

const TweetImage = styled.img`
  max-width: 800px;
`;

const TweetUrl = styled.span`
  font-size: 30px;
  color: #25D7FD;
  ${space} 
`;

export const Tweet = () => (
  <Root>
    <Title mt={60}>Overview</Title>
    <Center>
      <TweetImage src={'./img/tweet.png'} />
    </Center>
    <TweetUrl>http://bit.ly/32d6XD6</TweetUrl>
  </Root>
);