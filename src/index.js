/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: h
* Copyright Gamex DEX 
* Licensed under MIT ()

* Design and Coded by Simmmple & Gamex DEX

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Route path={`/rtl`} component={RTLLayout} />
      <Redirect from={`/`} to='/admin/dashboard' />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
