import React from 'react'
import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { mq } from 'theme';

const StoryCard = styled(Card)`
  display: flex;
  background-color: transparent;

  @media ${mq.gtSm} {
    height: 30rem;
    margin-bottom: 4rem;
  }

  @media ${mq.ltMd} {
    flex-direction: column;
    width: 100%;
    max-width: 30rem;
    margin: auto;
    margin-bottom: 4rem;
  }
`

const StoryImage = styled(CardMedia)`
  @media ${mq.gtSm} {
    flex: 1 0 25rem;
    max-width: 25rem;
  }

  @media ${mq.ltMd} {
    width: 100%;
    flex: 1 0 30rem;
    margin-bottom: 1rem;
  }
`

const StoryContent = styled(CardContent)`
  padding: 0;

  @media ${mq.gtSm} {
    padding: 2rem;
  }
`

const TextPreview = styled.pre`
  font-size: 1rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
`

export const StoryPreview = (props) => {
  const url = props.story.image_url || 'https://via.placeholder.com/150';
  const text = props.story.text && props.story.text.split(' ').slice(0, 30).join(' ') +  '...';

  return (
    <StoryCard elevation={0}>
      <StoryImage
        image={url}
        title={props.story.title}
      />
      <StoryContent>
        <Typography variant="subtitle1" color="textSecondary">
          {props.story.by}
        </Typography>
        <Button href={props.story.url} component="a">
          <Typography component="h3" variant="h3">
            {props.story.title}
          </Typography>
        </Button>
        {text && <TextPreview>{text}</TextPreview>}
      </StoryContent>
    </StoryCard>
  )
}
