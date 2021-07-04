import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';


import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
     
      <div>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      </div>

      <Typography variant="h6" style={{ color: 'black' }} > Toy Name: {post.creator}</Typography>
      <Typography  gutterBottom variant="h6" component="h2"> Price: {post.title} VND </Typography>   
      <Typography variant="h6" color="textSecondary" component="p"> Material: {post.message}</Typography>
     
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
