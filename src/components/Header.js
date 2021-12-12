import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import { deepPurple } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import Login from '../pages/Login';

const Header = () => {
  <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
  return (
    <Box sx={{ flexGrow: 1, background:'primary' }}>
      <AppBar
        position="static"
        color='secondary'
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Agenda Plus
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;