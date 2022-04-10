import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil optio
        eaque reprehenderit, nesciunt labore alias architecto quam quo
        voluptatum error, expedita dolor quia placeat quibusdam incidunt unde,
        accusantium veniam.
      </p>
    </div>
  );
};

const ReactTopics = () => {
  //let match = useRouteMatch();
  //console.log(match);
  //path nos permite construir rutas relativas <Route>, mientras q  ue 'url' nos permite construir enlaces relativos <Link> o <NavLink>

  let { path, url } = useRouteMatch();

  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Componentes</Link>
        </li>
        <li>
          <Link to={`${url}/state`}>Estado</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de react</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro
            officia id itaque perferendis, saepe non! Quod vero non beatae quia
            dignissimos! Aliquid accusantium veniam necessitatibus consequatur
            quae facere dolor.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
