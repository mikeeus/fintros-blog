import React, { useEffect, useRef } from 'react'
import { Container, CircularProgress } from '@material-ui/core';
import { Hero } from 'components/Hero';
import { StoryPreview } from 'components/StoryPreview';
import debounce from 'lodash.debounce';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  margin: auto;
  padding: 5rem;
  text-align: center;
`

export default function StoryList(props) {
  const ref = useRef(null)
  
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  const listener = debounce(() => {
    const bodyOffset = document.body.getBoundingClientRect();
    const { height, top, bottom } = bodyOffset;
    const bottomDistance = height + top - window.innerHeight;
    if (bottomDistance < 500) {
      props.onLoadMore();
    }
  }, 100);

  return (
    <React.Fragment>
      <Hero />
      <Container ref={ref} maxWidth="lg">
        {props.stories.map(story =>
          <StoryPreview story={story} key={story.id} />
        )}

        {props.loading &&
          <LoadingWrapper>
            <CircularProgress style={{height: 80, width: 80}} />
          </LoadingWrapper>
        }
      </Container>
    </React.Fragment>
  )
}
