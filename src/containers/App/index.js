import React, { Component } from 'react';
import './../../global.css';
import styles from './App.css';
import Login from './../../components/Login';
import { BrowserRouter as Router, Link as RouterLink, Route } from 'react-router-dom';
import MovieSearch from './../../pages/MovieSearch';
import Link from '@material-ui/core/Link';

const AdapterLink = React.forwardRef((props, ref) =>
  <RouterLink innerRef={ref} {...props} />
);

const CollisionLink = React.forwardRef((props, ref) =>
  <RouterLink innerRef={ref} to="/getting-started/installation/" {...props} />
);

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;
class App extends Component {
    onLoginSuccess = (response) => {
      console.log('Login', response);
    }

    onLoginFailue = (response) => {
      console.log('Login', response);
    }

    render() {
      return (
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Router>
              <h1>My React App</h1>
              <Login
                onSuccess={this.onLoginSuccess}
                onFailure={this.onLoginFailure}
              />
              <div className={styles.buttonWrapper}>
                <Link to="/home" component={RouterLink}>Home</Link>
                <Link to="/about" component={RouterLink}>About</Link>
                <Link to="/contact" component={RouterLink}>Contact</Link>
              </div>

              <Route path="/home" component={MovieSearch}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Router>
          </div>
        </div>
      )
    }
}

export default App;
