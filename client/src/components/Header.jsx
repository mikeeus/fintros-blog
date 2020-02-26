import React from 'react';
import { AppBar, Typography, Button, useScrollTrigger } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import {  } from 'theme'

export const Header = (props) => {
  const trigger = useScrollTrigger();
  const style = {transition: '200ms ease-in-out', backgroundColor: trigger ? props.backgroundColor : 'transparent' };

  return (
    <React.Fragment>
      <AppBar style={style} position="fixed" elevation={0}>
        <NavLink to="/">
          <Typography variant="h6">Puzzleware</Typography>
          <Button onClick={props.toggleDarkMode}>Toggle Mode</Button>
        </NavLink>
      </AppBar>
    </React.Fragment>
  );
}
