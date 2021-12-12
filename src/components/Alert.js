import React from 'react';
import clsx from 'clsx';
import { Close } from '@mui/icons-material';
import { amber } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { Snackbar } from '@mui/material';
import { SnackbarContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Icon } from '@mui/material';

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: 'success',
  },
  error: {
    backgroundColor: 'error',
  },
  info: {
    backgroundColor: 'info',
  },
  warning: {
    backgroundColor: 'warning',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: 1,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Alert = ({ type, message, autoclose }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={autoclose}
      onClose={handleClose}
    >
      <SnackbarContent
        className={clsx(classes[type])}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)}>
              {type === 'success' ? 'check_circle' : type }
            </Icon>
            {message}
          </span>
        }
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
            <Close className={classes.icon}/>
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
}

export default Alert;