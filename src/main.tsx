import React, { Fragment } from 'react';
import './index.css';
import { App } from './App';
import { ReactApplication } from '@typeclient/react-sapp';
import { bootstrp } from '@typeclient/core';

const app = new ReactApplication(document.getElementById('root'));

app.render(App);
app.onError((err, ctx?) => {
  return <Fragment>
    <h1>TypeClient Catch Error:</h1>
    { ctx ? <p>Path: {ctx.req.pathname}</p> : null }
    <p><strong>Message</strong></p>
    <pre>{err.stack}</pre>
  </Fragment>
});

bootstrp();