# Fintros Programming Assignment

Programming assignment to build blog using React client and Rails server.

# Deploying

Deploy Server using git subtree: `git subtree --prefix server heroku master`

Deploy client using netlify: `cd client && netlify deploy`

# Importing Latest Stories

For convenience while developing, importing stories is done using a task and can be run with `heroku run hn:import_stories`.

In the future this task can be refactored into a class and called from the front end.

## Requirements

[X] A. Please use Rails as an API (back-end only) and React on the front-end. Feel free to separate your codebase into two repos OR use Rails 6/Webpacker all in one code base. 

[X] B. Please use functional components (React Hooks), alongside styled-components for your styles (React Styled Components).

[X] C. Please store the last 1,000 HackerNews Articles in a Rails Postgres DB and render them on React front-end (HackerNews API: https://github.com/HackerNews/API)

[X] D. Please load the image from the meta description from the Article Link in HackerNews  (hint: 1)

[X] E. Load 30 articles. When the user scrolls down (past "More Post") please auto-load and display another 30 posts to the user

[X] F. Please use Rails 5.1 or later (ideally Rails 6.0/6,1) as well as Ruby 2.4.4 or later.

Please select 2 (or more) from this list to build into your assignment:
[X] 1) Please use your favorite blog-based layout. In the absence of a favorite Blog Style, please feel free to make the desktop front-end look as close the Hims Blog (Link: https://www.forhims.com/blog).

[X] 2) Make the page mobile responsive. 

[ ] 3) Add Desktop Filters - include 2 filters at the top (one for even-numbered articles and one for odd-numbered articles). That is, assume the most recent article from the HackerNews API is odd-numbered and the second most recent is even-numbered, etc. Ensure you use UseState/UseEffect

[X] 4) Create a search-bar to LOCALLY filter articles at the top utilizing useState/useEffect

[ ] 5) Add the ability for users to change the layout of the blog style (toggling between 2+ types)

[X] 6) Add a dark-mode option and toggle to switch back between normal/light mode and dark mode.

[ ] 7) Allow users to submit new posts (photos) by displaying a modal that let’s users drag and drop a photo / article title to create a new post.

[ ] 8) Create a keyword search filter that filters through all the articles titles based on the user’s keyword and only displays the post where article includes an exact match of the string

