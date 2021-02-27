/**
 *
 * LoginPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {}

export const LoginPage = memo((props: Props) => {
  return (
    <Login>
      <Div>
        <P>A customized spotify playlist for your needs</P>
      </Div>
    </Login>
  );
});

const Login = styled.div``;

const Div = styled.div``;

const P = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
`;
