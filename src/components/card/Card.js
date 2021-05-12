import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import './Card.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    backgroundColor: 'rgba(6, 9, 31, 20.918)',
    color:'#fff',
    borderRadius:15,
    borderTop:'8px solid rgb(18, 40, 102)',
    borderRight:'8px solid rgb(18, 40, 102)',
  },
  media: {
    height: 140,
  },
});

export default function SingleCard({image,name,info}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia style={{height:200}}
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="p" component="p" style={{color:"brown"}}>
            {info}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
          <div className="button">
        <Button size="small" color="primary">
          More Info <ArrowRightAltIcon/>
        </Button>
        <Button size="small" color="primary">
            <h3>|</h3>
          <BookmarkBorderIcon style={{color:"red"}}/>
        </Button>
        </div>
      </CardActions>
    </Card>
  );
}