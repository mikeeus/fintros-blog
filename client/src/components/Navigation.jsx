import React from 'react'
import { Toolbar } from '@material-ui/core'
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const links = [
    { url: '/stories/new', title: 'Submissions' },
    { url: '/keywords', title: 'Search' }
  ];

  return (
    <Toolbar>
      {links.map(link => 
        <NavLink
          color="inherit"
          key={link.title}
          to={link.url}
        >
          {link.title}
        </NavLink>
      )}
    </Toolbar>
  )
}
