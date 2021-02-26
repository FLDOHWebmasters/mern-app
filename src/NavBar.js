import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {
    Button,
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, 
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';


function UserAvatar(props) {
    if (props.user.avatar) {
        return (<img
        src={props.user.avatar} alt="user"
        className="rounded-circle align-self-center mr-2"
        style={{ width: '32px' }}></img>);
    }

    return (<i
        className="far fa-user-circle fa-lg rounded-circle align-self-center mr-2"
        style={{ width: '32px' }}></i>);
}

function AuthNavItem(props) {
    if (props.isAuthenticated) {
        return (
            <UncontrolledDropdown>
                <DropdownToggle nav caret>
                    <UserAvatar user={props.user} />
                </DropdownToggle>
                <DropdownMenu right>
                    <h5 className="dropdown-item-text mb-0">{props.user.displayName}</h5>
                    <p className="dropdown-item-text text-muted mb-0">{props.user.email}</p>
                    <DropdownItem divider />
                    <DropdownItem onClick={props.authButtonMethod}>Sign Out</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    return (
        <NavItem>
            <Button
                onClick={props.authButtonMethod}
                className="btn-link nav-link border-0"
                color="link">Sign In</Button>
        </NavItem>
    );
}

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let aboutLink = null;
        if (this.props.isAuthenticated) {
            aboutLink = (<NavItem>
                <RouterNavLink to="/About" className="nav-link" exact>About</RouterNavLink>
            </NavItem>
            );
        }

        return (
            <div>
                <Navbar color="dark" dark expand="md" fixed="top">
                    <Container>
                        <NavbarBrand href="/">My website</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <RouterNavLink to="/" className="nav-link" exact>Home</RouterNavLink>
                                </NavItem>
                                {aboutLink}
                            </Nav>
                            <Nav className="justify-content-end" navbar>
                                <NavItem>
                                    <NavLink href="https://developer.microsoft.com/graph/docs/concepts/overview" target="_blank">
                                        <i className="fas fa-external-link-alt mr-1"></i>
                                        Docs
                                    </NavLink>
                                </NavItem>
                                <AuthNavItem
                                    isAuthenticated={this.props.isAuthenticated}
                                    authButtonMethod={this.props.authButtonMethod}
                                    user={this.props.user} />
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }

}