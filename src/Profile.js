import React, { useState, useEffect } from 'react';
import Grandma from './grandmother.svg';
import { config } from './Config';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {FormControl, FormLabel, Row} from 'react-bootstrap';
import withAuthProvider from './AuthProvider';
import {
    BrowserRouter as 
    Route,
    Link,
    useParams,
  } from "react-router-dom";
import './Profile.css';

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            firstName: "",
            lastName: "",
            dob: "",
            isLoading: true,
            access: null,
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})          
    }

    async handleSubmit(event) {
        event.preventDefault();

        var filledInData = {};
        Object.keys(this.state).map((key) => {
            if (this.state[key] !== "" && (key !== "familyMembers") && (key!== "isLoading")) {
                filledInData[key] = this.state[key];
            }
        });
        console.log(filledInData);

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(filledInData)
        };
        this.setState({isLoading: true});
        fetch('/api/UpdateProfileInfo', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("data" + data);
                this.setState({isLoading: false});
            },
            (error) => {
                console.log(error)
            })
            
    }

    async componentDidMount() {
        if (this.props.user)
        {
          try {
            // Get the user's access token
            var accessToken = await this.props.getAccessToken(config.scopes);
            this.setState({
                access: accessToken
            })
            
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'access': this.state.access},
            };

            fetch(`/api/GetProfileInfo`, requestOptions, {})
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                Object.keys(data).map((key) => {
                    this.state[key] = data[key];
                })
                
            })
            .catch((error) => console.log(error));
                         
          }
          catch (err) {
            console.log(err)            
          }
        }
      }

    render() {
        let match=this.props.match;

        if(this.props.isAuthenticated) {
            return (
                <div className="profile-container">
                <p>Please fill out your profile information</p>
                
                    <Form>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text" name="firstName"
                            value={this.state.firstName || ""} 
                            onChange={this.handleChange}  
                            className="animated fadein"
                        />  
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text" name="lastName"
                                    value={this.state.lastName || ""} 
                                    onChange={this.handleChange}  
                                    className="animated fadein"
                        />  
                    </div>
                    <div className="form-group">
                        <label>Date of Birth: </label>
                        <input type="text" name="dob"
                                    value={this.state.dob || ""} 
                                    onChange={this.handleChange}  
                                    className="animated fadein"
                        />  
                     </div>
                     <button className="btn" onClick={this.handleSubmit}>Save</button>
                   </Form> 
                </div>
                
                
                
                
            )
        }
        else {
            return null;
        }
    }

}
export default withAuthProvider(Profile);