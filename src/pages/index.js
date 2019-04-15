import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 12px;
  margin-left: auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Avatar = styled.img`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`;

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`;

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`;

const Excerpt = styled.p`
  margin: 0;
`;
// Using css prop provides a concise and flexible API to style the components. //
const underline = css`
  text-decoration: underline;
`;

const User = ({ avatar, username, excerpt }) => (
  <UserWrapper>
    <Avatar src={avatar} alt='' />
    <Description>
      <Username>{username}</Username>
      <Excerpt>{excerpt}</Excerpt>
    </Description>
  </UserWrapper>
);

export default () => (
  <Container>
    <h1 css={underline}>About Emotion</h1>
    <p>Emotion is uber cool</p>
    <User
      username='Jane Doe'
      avatar='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username='Bob Smith'
      avatar='https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg'
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
);
