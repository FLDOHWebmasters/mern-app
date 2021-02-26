import React from 'react';
import {
    Button,
    Jumbotron
} from 'reactstrap';

function WelcomeContent(props) {
    if (props.isAuthenticated) {
        return (
            <div>
            <h4>Welcome {props.user.displayName}!</h4>
            <p>Use the nav bar at the top to get started.</p>
            </div>
        );
    }

    return (<Button color="primary" onClick={props.authButtonMethod}>Click here to sign in</Button>);
}

export default class Welcome extends React.Component {
    render() {
        return (
        <Jumbotron>
            <h1>FDOH Ancestry Site</h1>
            <p className="lead">
                This site is available to all Floridians.
            </p>
            <WelcomeContent
                isAuthenticated={this.props.isAuthenticated}
                user={this.props.user}
                authButtonMethod={this.props.authButtonMethod} />
        </Jumbotron>
        );
        
    }
}