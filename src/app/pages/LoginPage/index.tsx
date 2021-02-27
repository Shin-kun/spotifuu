/**
 *
 * LoginPage
 *
 */
import React, { memo } from 'react';
import { InlineIcon } from '@iconify/react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import spotifyIcon from '@iconify/icons-mdi/spotify';

import styled from 'styled-components/macro';

interface Props {}

export const LoginPage = memo((props: Props) => {
  return (
    <Div>
      <P>A customized spotify playlist for your needs</P>
      <SpotifyButton variant="contained" color="primary">
        CONNECT WITH SPOTIFY
        <InlineIcon height="2em" width="2em" icon={spotifyIcon} color="green" />
      </SpotifyButton>
    </Div>
  );
});

const Div = styled.div`
  height: 100%;
  background-color: #feffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  @media only screen and (min-width: 376px) {
  }
`;

const P = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 2em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  text-align: center;

  @media only screen and (min-width: 376px) {
    font-size: 1em;
  }
`;

const SpotifyButton = withStyles({
  root: {
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    backgroundColor: '#17252A',
    '&:hover': {
      backgroundColor: '#17252A',
    },
  },
})(Button);
