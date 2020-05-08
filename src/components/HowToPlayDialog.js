import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function HowToPlayDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        className={classes.button}
        startIcon={<LibraryBooksRoundedIcon />}
      >
        HOW TO PLAY 
                        </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">TRIVIA GAME APP</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             This is a Trivia Game with the following rules:
            <ol>
              <li>Click the start button.</li>
              <li>Choose a fun category.</li>
              <li>The questions have a correct answer.</li>
              <li>Find the right answer and win the competition.</li>
              <li>Let's start click and start the competition.</li>
            </ol>
            Everything clear ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" style={{ backgroundColor:'#f09819' }} color="primary">
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default HowToPlayDialog