import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavBar from './NavBar';
import ErrorMessage from './ErrorMessage';
import Welcome from './Welcome';
import withAuthProvider from './AuthProvider';
import 'bootstrap/dist/css/bootstrap.css';

import "./index.css";

  class App extends Component {
    render() {
      let error = null;
      if (this.props.error) {
        error = <ErrorMessage
          message={this.props.error.message}
          debug={this.props.error.debug} />;
      }
  
      return (
        <Router>
          <div>
            <NavBar
              isAuthenticated={this.props.isAuthenticated}
              authButtonMethod={this.props.isAuthenticated ? this.props.logout : this.props.login}
              user={this.props.user} />
            <Container>
              {error}
              <Route exact path="/"
                render={(props) =>
                  <Welcome {...props}
                    isAuthenticated={this.props.isAuthenticated}
                    user={this.props.user}
                    authButtonMethod={this.props.login} />
                } />
            </Container>
          </div>
        </Router>
      );
    }
  }
export default withAuthProvider(App);