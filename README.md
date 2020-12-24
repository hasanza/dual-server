# dual-server
An express server that serves a react app on one route and jQuery views on the rest of them.

The react app is served on the express route localhost:5000/react, which is the home for this app, while all other routes serve the jQuery views. The internal react routing will be handled with react router.

To run, clone the repo, cd into the server directory and type 'node index.js' in the local terminal.

If you want to make changes in the react app, run 'npm install' in the local terminal to install the modules.
