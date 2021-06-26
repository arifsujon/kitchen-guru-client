import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddBlog from "./components/Admin/AddBlog/AddBlog";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Login from "./components/Admin/Login/Login";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageBlog from "./components/Admin/ManageBlog/ManageBlog";
import BlogSingle from "./components/BlogSingle/BlogSingle";
import Home from "./components/Home/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  sessionStorage.setItem("email", "")
  sessionStorage.setItem("signedIn", false)
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          
         
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/admin">
              <Dashboard></Dashboard>
            </Route>
          <Route exact path="/addBlog">
            <AddBlog />
          </Route>
          <Route exact path="/manageBlog">
            <ManageBlog />
          </Route>
          <Route exact path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route exact path="/blog/:id">
            <BlogSingle />
          </Route>
          {/* <Route path="*">
            <Login />
          </Route> */}
          
        </Switch>
    </Router>
  );
}

export default App;
