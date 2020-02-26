import React, { useEffect, useState } from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';

import { useTheme } from './theme';
import { Header } from 'components/Header';
import StoryList from 'containers/StoryList';
import StoryNew from 'containers/StoryNew';

export default function App() {
  const [theme, toggleDarkMode] = useTheme();
  const themeObj = createMuiTheme(theme);
  const [stories, setStories] = useState([]);
  const [filter, setFilter] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadStories();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [stories]);

  useEffect(() => {
    if (!filter) {
      setFiltered(stories);
    } else {
      const filteredStories = stories.filter(story =>
        story.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
      setFiltered(filteredStories);
    }
  }, [filter]);

  const loadStories = (last = null) => {
    setLoading(true);
    let url = '/api/stories';
    const params = [];

    if (last) { params.push(`last=${last}`) }
    if (params) { url += `?${params.join('&')}`}

    return axios.get(url)
      .then(res => {
        let data = res.data;
        if (last) {
          data = [...stories, ...data]
        }
        console.log({ data });
        setStories(data);
        setFiltered(data);
      })
      .catch(err => console.error(err));
  }

  const onLoadMore = () => {
    if (loading || filter) { return; }
    const lastStory = stories[stories.length - 1];
    console.log({ lastStory })

    if (lastStory) {
      loadStories(lastStory.id)
    }
  }

  const onFilter = (value) => {
    setFilter(value);
  }

  return (
    <MuiThemeProvider theme={themeObj}>
      <CssBaseline />
      <BrowserRouter>
        <Header
          toggleDarkMode={toggleDarkMode}
          backgroundColor={themeObj && themeObj.palette.background.default}
          mode={themeObj && themeObj.palette.type}
          onFilter={onFilter}
          filter={filter}/>
        <Switch>
          <Route path="/stories/new">
            <StoryNew />
          </Route>
          {/* <Route path="/search">
            <StorySearch />
          </Route> */}
          <Route path="/">
            <StoryList loading={loading} stories={filtered} onLoadMore={onLoadMore}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
