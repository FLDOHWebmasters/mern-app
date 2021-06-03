import React, {useState, useEffect} from 'react';
import './App.css';
import { config } from './Config';

export default function Family(props) {
    //When the component renders, run fetchItems();
    useEffect(() => {
        fetchItems();
    }, []);
    
    
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        var accessToken = await props.getAccessToken(config.scopes);
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'access': accessToken},
        };
        const data = await fetch(
            'http://localhost:7071/api/HttpTrigger6', requestOptions, {}
        );

        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        <div className="container-fluid">
        <div className="family-tree">
            {items.map(props=> (
                <div key={props._id} className="entry col-md-3">    
                    <div className="name">
                        <p>{props.firstName + " " + props.lastName}</p>
                    </div>  
                    <div className="info">
                        <p>DOB: {(props.dob ? props.dob : "Unknown")}</p>
                        <p>Bith Place: {props.birthPlace ? props.birthPlace : "Unknown"}</p>
                        <p>Relationship: {(props.relationship ? props.relationship : "Unknown")}</p>
                    </div>                                   
                </div>
                               
            ))}
        </div>
        </div>
    );
}