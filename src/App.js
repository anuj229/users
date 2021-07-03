import react from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import SingleUser from "./components/SingleUser";
import Post from "./components/Post";
import Gallery from "./components/Gallery";
import Todo from "./components/Todo";
import Error from "./components/Error";
import { AppProvider } from "./context/Context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/users" component={LandingPage} />
          <Route exact path="/users/:id" component={SingleUser} />
          <Route exact path="/users/:id/post" component={Post} />
          <Route exact path="/users/:id/gallery" component={Gallery} />
          <Route exact path="/users/:id/todo" component={Todo} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
