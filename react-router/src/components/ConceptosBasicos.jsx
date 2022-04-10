import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReacTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";
import PrivateRoute from "./PrivateRoute";

/* const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <Router>
        <Switch>
          <Route exact path="/">
            <h3>Home</h3>
            <p>Bienvenido al portal</p>
          </Route>
          <Route exact path="/acerca" component={Acerca} />
          <Route
            exact
            path="/contacto"
            children={
              <>
                <Contacto />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iure, excepturi, minus impedit soluta ipsa magni dolorum ex
                  vero eligendi laboriosam eos nostrum perspiciatis non facilis
                  fugiat magnam minima aliquam in.
                </p>
              </>
            }
          />
        </Switch>
      </Router>
    </div>
  );
}; */
const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route path="*" component={Error404} />
        </Switch>
      </HashRouter>
      <hr />
      <h2>Conceptos Basicos</h2>
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/about">
            <Redirect to="/acerca" />
          </Route>
          <Route exact path="/contact">
            <Redirect to="/contacto" />
          </Route>
          <Route exact path="/usuario/:username/" component={Usuario} />
          <Route exact path="/productos" component={Productos} />
          <Route path="/react" component={ReactTopics} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};
export default ConceptosBasicos;
