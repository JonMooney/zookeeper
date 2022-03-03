const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

/* Code to add when accepting JSON Post Data */
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
/* End of code to accept POST data */

app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

/* Middleware that tells browser where to find resources (JS, CSS, etc)
   Public Folder */

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
