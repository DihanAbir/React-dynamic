import React from 'react';
import './App.css'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './component/Home/Home';
import NoFound from './component/NoFound/NoFound';
import PostDetails from './PostDetail/PostDetails';



function App() {
 
  return (
    <div className="App-header">
        <Router >
          <Switch>

            <Route exact path="/" >
              
              <Home/>
            </Route>
            <Route path="/post/:postId">
              <PostDetails></PostDetails>
            </Route>

            <Route path="*">
              <NoFound/>
            </Route>


          </Switch>
          
        </Router>
    </div>
  );
}

export default App;
