import React, {useState, useEffect} from 'react';
import { Form, FormLabel, FormGroup, FormControl, Row, Col, Button } from 'react-bootstrap'
import { config } from './Config';

export default function Search(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [birthPlace, setBirthPlace] = useState("");
    const [data, setData] = useState({});
    useEffect(() => {
        
    })

    const handleSubmit = e => {
        e.preventDefault();
        var access = props.getAccessToken(config.scopes);
        const formData = {
            "firstName":firstName,
            "lastName": lastName,
            "dob": dob,
            "birthPlace": birthPlace,
        };
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'data': JSON.stringify(formData), 'access': access}
        };
        console.log(formData)
       
        fetch(`http://localhost:7071/api/HttpTrigger7`, requestOptions)
        .then(response => response.json())
        .then(result => {
            setData(result);
            setIsLoading(false)
            console.log(result)
        })       
    }

    return (
        <>
        <div className="container-fluid px-0 search">
            <div className="row justify-content-center ">
            <div className="col-auto">
                <div className="search-nest">
                <Form onSubmit={e => handleSubmit(e)}>
                    <h3>Search for yourself or relatives</h3>
                    <FormGroup as={Row}>
                        <FormLabel column>First Name:</FormLabel>
                        <Col md="12">
                            <FormControl placeholder="First Name" type="text" 
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            />
                        </Col>               
                    </FormGroup>
                    <FormGroup as={Row}>
                        <FormLabel column>Last Name:</FormLabel>
                        <Col md="12">
                            <FormControl placeholder="Last Name" type="text" 
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            />
                        </Col>               
                    </FormGroup>    
                    <FormGroup as={Row}>
                        <FormLabel column>DOB or Year:</FormLabel>
                        <Col md="12">
                            <FormControl placeholder="DOB or Year" type="text" 
                            value={dob}
                            onChange={e => setDob(e.target.value)}
                            />
                        </Col>               
                    </FormGroup>           
                    <FormGroup as={Row}>
                        <FormLabel column>Place of Birth:</FormLabel>
                        <Col md="12">
                            <FormControl placeholder="Place of Birth" type="text" 
                            value={birthPlace}
                            onChange={e => setBirthPlace(e.target.value)}
                            />
                        </Col>               
                    </FormGroup>
                      
                    </Form> 
                </div><div className="row justify-content-center align-content-center">
            <div className="col-auto letsgoBtn">
                <Button 
                className="letsgo" 
                type="submit" 
                value="Submit" 
                onClick={e => handleSubmit(e)}>Let's go</Button>  
            </div></div> 
            </div></div>   
            {isLoading && <p>Loading.</p>}  
                    
        </div>
        <div className="row justify-content-center">
            <div className="col-auto">     
                {!isLoading && (data.map(props => {
                    return (   
                        <div key={props._id} className="entry">    
                            <div className="name">
                                <p>{props.firstName + " " + props.lastName}</p>
                            </div>  
                            <div className="info">
                                <p>DOB: {(props.dob ? props.dob : "Unknown")}</p>
                                <p>Bith Place: {props.birthPlace ? props.birthPlace : "Unknown"}</p>
                                <p>Relationship: {(props.relationship ? props.relationship : "Unknown")}</p>
                            </div>                                   
                        </div>                         
                        )
                }))}    
            </div>
        </div>
        </>
    )
}

