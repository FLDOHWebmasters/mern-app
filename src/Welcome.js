import React from 'react';
import {
    Button
} from 'reactstrap';
import {
    Link
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function WelcomeContent(props) {
    if (props.isAuthenticated) {
        return (
            <div>
            <h4>Welcome {props.user.displayName}!</h4>
            <p>Use the nav bar at the top to get started.</p>
            </div>
        );
    }

    return (<Button className="signInBtn" onClick={props.authButtonMethod}>Click here to sign in</Button>);
}

export default class Welcome extends React.Component {
    render() {
        return (
            <div className="container-fluid px-0">
                <div className="welcome row no-gutters align-items-start p-0">
                    <div className="col welcome-msg">
                        <h3>Connecting Floridians Across Generations</h3>
                        <p className="lead">
                            This site is open to the public.
                        </p>
                        <WelcomeContent
                            isAuthenticated={this.props.isAuthenticated}
                            user={this.props.user}
                            authButtonMethod={this.props.authButtonMethod} />
                    </div>
                </div>
                <div className="row no-gutters text-center welcome-middle">
                    <div className="col">
                        <h3>Discover your past.</h3>
                    </div>
                </div>
                <div className="row no-gutters text-center welcome-bottom">
                    <div className="col">
                        <h3>Get your personalized report today.</h3>
                        <Link className="custom-btn btn" to={'/search'}>Get started!</Link>
                    </div>
                </div>
            </div>
        );
        
    }
}