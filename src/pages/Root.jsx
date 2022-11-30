import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import StoreProvider from "components/Store/Provider";
import RoutesPrivate from "components/Routes/Private/Private";
import Home from "./Home/Home";
import Login from "./Login/Login";
//import Additen from "./Additen/Additen";
import tabelaAdm from './AdmTabela/tabelaAdm'
import Cadastro from "./Cadastro/Cadastro";

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <RoutesPrivate path="/home" component={Home} />
        <RoutesPrivate path="/AdmTabela" component={tabelaAdm} />
      </Switch>
    </StoreProvider>
  </Router>
);

export default PagesRoot;
