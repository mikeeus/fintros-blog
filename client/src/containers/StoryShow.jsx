import React from 'react'
import { useParams } from 'react-router-dom';

export default function StoryShow() {
  let { storyId } = useParams();

  return (
    <div>
      storyId: { storyId }
    </div>
  )
}
