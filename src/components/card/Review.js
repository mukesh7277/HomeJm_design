import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    backgroundColor: 'rgba(10, 1, 20, 20.918)',
    color:'#fff',
    borderRadius:20,
    borderTop:'5px solid rgb(44, 98, 150)',
    borderRight:'5px solid rgb(44, 98, 150)',
  },
  media: {
    height: 100,
  },
});

export default function SingleCard({image,name,info,desc}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
          <div style={{display: 'flex',alignItems:'center',paddingLeft:10}}>
        <img src={image} alt='review' style={{height:40,width:40,borderRadius:'50%'}}/>
        <CardContent>
        <Typography gutterBottom variant="h6" component="h3">
            {name}
          </Typography>
        <Typography gutterBottom variant="p" component="p" style={{color:"brown"}}>
         {info}
          </Typography>
          </CardContent>
          </div>
          <CardContent>
          <Typography gutterBottom variant="p" component="p">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}