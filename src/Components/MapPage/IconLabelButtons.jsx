import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: "50px",
    padding: '6px 50px',

  },

}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        info on the center +
        <addCircleOutline className={classes.rightIcon} />
      </Button>
    </div>
  );
}
