import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Table } from 'reactstrap';

import { config } from './Config';

import withAuthProvider from './AuthProvider';


class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventsLoaded: false,
      events: [],
      startOfWeek: undefined
    };
  }

  async componentDidUpdate() {
    if (this.props.user && !this.state.eventsLoaded)
    {
      try {
        // Get the user's access token
        var accessToken = await this.props.getAccessToken(config.scopes);

        // Get the user's events
        //var events = await getUserWeekCalendar(accessToken, this.props.user.timeZone, startOfWeek);

        // Update the array of events in state
        /*
        this.setState({
          eventsLoaded: true,
          events: events,
          startOfWeek: startOfWeek
        });
        */
      }
      catch (err) {
        this.props.setError('ERROR', JSON.stringify(err));
      }
    }
  }

  render() {
    return (
      <h1>Hello, world</h1>
    );
  }
}

export default withAuthProvider(About);