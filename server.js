const express = require('express');
const path = require('path');
const app = express();
const basicAuth = require('express-basic-auth');
const httpsRedirect = require('express-https-redirect');
const publicPath = path.join(__dirname, 'build');
const PORT = process.env.PORT || 4000;
require('dotenv').config()

if (process.env.REACT_APP_AUTH_OVERLAY == "true"){

  app.use(basicAuth({
    users: { 
      'admin': 'yorlie',
      'yorlie': process.env.REACT_APP_SERVER_PASSSWORD
    },
    challenge: true,
  }))
}
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(publicPath));
app.use('/', httpsRedirect());
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on :${PORT}`))
