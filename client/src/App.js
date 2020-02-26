import React from 'react';

import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';

import { Button, AppBar, Grid, Typography, Container, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Extension as ExtensionIcon } from '@material-ui/icons';

import styles from './App.module.scss';
import { useTheme } from './theme';
import { Hero } from 'components/Hero';
import { Header } from 'components/Header';
import { PostsList } from 'components/PostsList';

export default function App() {
  const [theme, toggleDarkMode] = useTheme();
  const themeObj = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={themeObj}>
      <CssBaseline />
      <BrowserRouter>
        <main className={styles.App}>
          <Header toggleDarkMode={toggleDarkMode} backgroundColor={themeObj && themeObj.palette.background.default} />
          <Hero>
            <Typography variant="h1">Savoir</Typography>
          </Hero>
          <Container maxWidth="lg">
            <PostsList />
            {/* <Header /> */}
            {/* hero */}
            {/* headline */}
            {/* sticky navigation */}
            {/* {posts.map(post => (
              <PostPreview key={post.title} post={post} />
            ))} */}
            <Grid container spacing={5}>
              {/* <Posts title="From the firehose" posts={posts} /> */}
            </Grid>
            {/* <Footer /> */}
          </Container>
        </main>
      </BrowserRouter>
    </MuiThemeProvider>
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Fintros - Blog</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/">
    //         {/* <Home /> */}
    //         Home
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}
