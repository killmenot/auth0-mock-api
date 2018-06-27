'use strict';

const express = require('express');
const jwt = require('jwt-simple');

const app = express();
const jwtSecret = 'foobar';

app.get('/healthcheck', (req, res) =>
  res.json({
    ok: true,
    timestamp: (new Date()).getTime()
  })
);

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/authorize', (req, res) => res.redirect(`${req.query.redirect_uri}?code=mzgybGPAr4tGi9fd`));

app.post('/oauth/token', (req, res) => {
  const data = {
    given_name: 'John',
    family_name: 'Doe',
    nickname: 'john.doe',
    name: 'John Doe',
    picture: 'https://example.org/john/doe/photo.jpg',
    gender: 'male',
    locale: 'en',
    updated_at: '2018-06-27T13:54:54.225Z',
    email: 'john.doe@example.org',
    email_verified: true,
    iss: 'https://xxx.eu.auth0.com/',
    sub: 'google-oauth2|11112222333344455556',
    aud: 'mTI2HbydacCjnq07tErCkEqoEIyX6daS',
    iat: 1530107787,
    exp: 1530143787
  };

  res.json({
    id_token: utils.jwtEncode(data, jwtSecret)
  });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.info('Express server listening on port ' + server.address().port);
});
