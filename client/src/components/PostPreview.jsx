import React from 'react'
import { CardActionArea } from '@material-ui/core'

export const PostPreview = (props) => {
  const post = {
    id: 22413019, 
    title: "OpenSSH with FIDO2 and Trezor", 
    type: "story", 
    by: "mmahut", 
    url: "https://blog.trezor.io/openssh-with-fido2-and-trez...", 
    score: 1, 
    deleted: nil,
    image: 'http://www.example.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcmtCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6ae84a21e14711923b0e13dbc3586f3357514938/22413019',
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.cover}
          image={post.image}
          title={post.title}
        />
        <CardContent className={classes.content}>
          <Typography component="h2" variant="h2">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {post.by}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {post.scpre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
