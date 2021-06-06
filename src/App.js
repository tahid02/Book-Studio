import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Details from './components/Details/Details';
import Favorites from './components/Favorites/Favorites';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Router>
      <div>
       <Navigation />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/home/favorites">
            <Favorites />
          </Route>
          <Route path="/home/:id/detail">
            <Details />
          </Route>
          <Route path="/home/search">
            
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
