import React from 'react';

import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { mq } from 'theme';

const HeroWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 6rem 0;
  color: ${props => props.theme.main};
  
  display: flex;
  flex-direction: column;
  
  @media ${mq.gtMd} {
    height: 39vw;
    flex-direction: row;
  }
  @media ${mq.md} {
    height: 120vw;
  }
  @media ${mq.sm} {
    height: 120vw;
  }
  @media ${mq.xs} {
    height: 170vw;
  }
`
const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 2rem;
`

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroSection>
        <Typography variant="h1">Fintros - Blog</Typography>
      </HeroSection>
      <HeroSection>
        Right
      </HeroSection>
    </HeroWrapper>
  )
}