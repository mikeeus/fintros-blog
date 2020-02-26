import React from 'react';
import { AppBar, Button, IconButton, InputBase, Toolbar, Typography, useScrollTrigger } from "@material-ui/core";
import { BrightnessHigh, BrightnessLow, Search } from '@material-ui/icons';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { mq } from 'theme';

const AppToolbar = styled(Toolbar)`
  display: flex;

  @media ${mq.xs} {
    flex-direction: column;
    text-align: left;
  }
`

export const Header = (props) => {
  const trigger = useScrollTrigger({ disableHysteresis: true }) || window.scrollY > 100;

  const style = {
    transition: '200ms ease-in-out',
    backgroundColor: trigger ? props.backgroundColor : 'transparent' };

  const onChange = (e) => {
    const value = e.target.value;
    props.onFilter(value);
  }

  return (
    <React.Fragment>
      <div style={{height: 100, backgroundColor: 'transparent' }}></div>
      <AppBar color="transparent" style={style} position="fixed" elevation={0}>
        <AppToolbar>
          <div style={{flexGrow: 1}}>
            <Button disableRipple to="/" color="inherit" component={Link}>
              <Typography variant="h4">
                Fintros
              </Typography>
            </Button>

            <IconButton edge="end" aria-label="toggle-dark-mode" onClick={props.toggleDarkMode}>
              {props.mode === 'dark' ? <BrightnessHigh /> : <BrightnessLow />}
            </IconButton>
          </div>

          <InputBase
            placeholder="Filter latest stories…"
            inputProps={{ onChange: onChange, value: props.filter }}
          />
        </AppToolbar>
      </AppBar>
    </React.Fragment>
  );
}
