import React from 'react';

import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { mq } from 'theme';

const HeroWrapper = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 6rem 0;
  color: ${props => props.theme.main};
  margin-bottom: 3rem;
  margin-top: -100px;
  
  display: flex;
  flex-direction: column;
  
  @media ${mq.gtMd} {
    height: 39vw;
    flex-direction: row;
  }
  @media ${mq.md} {
    height: 80vw;
  }
  @media ${mq.sm} {
    height: 100vw;
  }
  @media ${mq.xs} {
    height: 130vw;
  }
`
const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 2rem;
`

const Headline = styled(Typography)`
  @media ${mq.xs} {
    font-size: 1.5rem;
  }
`
export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroSection>
        <Headline variant="h1">Fintros</Headline>
      </HeroSection>
    </HeroWrapper>
  )
}