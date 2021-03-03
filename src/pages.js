import React from 'react';
import { Link, useLocation,   useParams,
    useRouteMatch ,Switch, Route} from "react-router-dom";

function LinkNav() {
    return (    <nav>
        <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
        <ul>
            <li>
                <Link to="/about/history">Company History</Link>
            </li>
        </ul>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/wrongpage">404</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
        </nav>);
}

export function Home() {
    return(
        <div>
            <h1>Home</h1>
            <LinkNav/>
        </div>
    )
}

export function About() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();
  
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Topic />
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
    let topic = <Events/>
  
    return (
      topic
    );
  }

export function Events() {
    return(
        <div>
            <h1>Events</h1>
            <LinkNav/>
        </div>
    )
}

export function Contact() {
    return(
        <div>
            <h1>Contact</h1>
            <LinkNav/>
        </div>
    )
}

export function Whoops404() {
    let location = useLocation();
    return(
        <div>
            <h1>404 - not found at {location.pathname}</h1>
            <LinkNav/>
        </div>
    )
}