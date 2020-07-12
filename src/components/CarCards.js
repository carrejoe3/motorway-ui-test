import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import './CarCards.css';
import { Avatar } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CarCards = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <Card className="carCard" onClick={handleOpen}>
      <CardMedia
        image={props.img.url}
        alt={props.img.alt_description}
        className="carImage"
        component="img"
        height="200"
      />
      <Dialog open={open} TransitionComponent={Transition}>
        <DialogContent>
          <Card elevation={0}>
          <div className="avatarContainer">
            <Avatar alt={props.img.user.name} src={props.img.user.profile_image} className="profilePic"></Avatar>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.img.user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.img.user.bio}
            </Typography>
            <br></br>
            <Typography variant="body2" color="textSecondary" component="p" fontWeight="fontWeightLight">
              {props.img.user.location}
            </Typography>
          </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default CarCards
