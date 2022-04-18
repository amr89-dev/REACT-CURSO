import React from "react";
import { Redirect, Route } from "react-router-dom";

/* const PrivateRoute = (props) => {
  return (
    <Route exact={props.exact} path={props.path} component={props.component} />
  );
}; */

/* const PrivateRoute = (props) => {
  return <Route {...props} />;
}; */

//Simular autenticación
let auth;
auth = null;
auth = true;

const PrivateRoute = ({ component: Component, ...resto }) => {
  return (
    <Route {...resto}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;
