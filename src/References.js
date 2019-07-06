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

const ReferencesKinds = styled.span`
  font-size: 30px;
  color: #25D7FD;
  ${space} 
`;

export const References = () => (
  <Root>
    <Center>
      <Title mt={10}>References</Title>
      <ReferencesKinds mt={10} >https://www.freecodecamp.org/news/rest-apis-are-rest-in-peace-apis-long-live-graphql-d412e559d8e4/#fb0c</ReferencesKinds>
      <ReferencesKinds mt={10} >https://github.com/Goblinlordx/authograph</ReferencesKinds>
      <ReferencesKinds mt={10} >https://bitbucket.org/baldiviab/authed-graphql/src/7be7708ab996c312e02a9e82ae66aea1ab42a735/auth/authograph.js?at=master&fileviewer=file-view-default</ReferencesKinds>
      <ReferencesKinds mt={10} >https://github.com/graphql/graphql-js/tree/fd97652d3e901b0d03b2429bd28e3cd59f402f7a/src/validation/rules</ReferencesKinds>
      <ReferencesKinds mt={10} >https://github.com/JCMais/graphql-yup-middleware</ReferencesKinds>
      <ReferencesKinds mt={10} >https://itnext.io/graphql-mutation-arguments-validation-with-yup-using-graphql-middleware-645822fb748</ReferencesKinds>
    </Center>
  </Root>
);