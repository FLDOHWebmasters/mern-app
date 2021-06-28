import React, {useState, useEffect} from 'react';
import './App.css';
import './FamilyTree.css';
import { config } from './Config';
import { Container, Button, FormControl, FormLabel } from 'react-bootstrap';
import grandma from './grandmother.svg';
import woman from './woman.png';
import man from './man.png';

export default function Family(props) {
    const [items, setItems] = useState([]);
    const [showPopup, setPopup] = useState(false);
    const [showEdit, setEdit] = useState(false);
    const [access, setAccess] = useState("");

    //When the component renders, run fetchItems();
    useEffect(() => {
        fetchItems();
    }, []);
    
    
   
    const fetchItems = async () => {
        var accessToken = await props.getAccessToken(config.scopes);
        setAccess(accessToken);
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'access': accessToken},
        };
        const data = await fetch(
            '/api/HttpTrigger6', requestOptions, {}
        );

        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    function FamilyMember(props) {
        const [editMode, setEditMode] = useState(false);
        const [deleteItem, setDelete] = useState(false);
        const [firstName, setFirstName] = useState((props.firstName ? props.firstName : ""));
        const [lastName, setLastName] = useState((props.lastName ? props.lastName : ""));
        const [dob, setDob] = useState((props.dob ? props.dob : ""));
        const [birthPlace, setBirthPlace] = useState(`${props.city ? props.city : ""}, ${props.state ? props.state : ""}`);

        useEffect(() => {
            fetchItems();
        }, []);

        const fetchItems = async () => {
            if (showPopup === 'me') {
                try {
                    const requestOptions = {
                        method: 'GET',
                        headers: {'Content-Type': 'application/json', 'access': access},
                    };
        
                    fetch(`/api/GetProfileInfo`, requestOptions, {})
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        console.log(data);  
                        setFirstName(data["firstName"]);
                        setLastName(data["lastName"]);  
                        setDob(data["dob"]);   
                    })
                    .catch((error) => console.log(error));
                                 
                  }
                  catch (err) {
                    console.log(err)            
                  }
                
            }
            else {
                const requestOptions = {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json', "access": access, "role": showPopup},
                };
                const fetchData = () => {
                fetch(`/api/GetFamilyMember`, requestOptions, {})
                .then((res) => {
                    console.log(res.body);
                    return res.json();
                })
                .then((response) => {
                    
                    
                })
                .catch((error) => console.log(error));
              }
                return null
            }
        }

        const handleSubmit = e => {
            e.preventDefault();
            const formData = {
                "firstName":firstName,
                "lastName": lastName,
                "dob": dob,
                "birthPlace": birthPlace,
                "access": access
            };
        
            console.log(formData)

            if (showPopup === "me") {
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(formData)
                };
                fetch('/api/UpdateProfileInfo', requestOptions)
                .then(() => {  
                    
                },
                (error) => {
                    console.log(error)
                })
            }
                  
        }
    
        const handleDelete = e => {
            e.preventDefault();
            const formData = {
                "firstName":firstName,
                "lastName": lastName,
                "dob": dob,
                "birthPlace": birthPlace,
            };
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'id': props._id, 'access': props.access}
            };
            console.log(formData)
           
            fetch(`/api/DeleteFamilyMember`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setEditMode(false);
                setDelete(true);
                console.log(result)
            })       
        }
    
       
        return (
            <div className="edit-popup">
            <div className="center-edit">
            <div className="edit-form">
                <FormLabel column>First Name:</FormLabel>                  
                    <FormControl 
                        type="text" 
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}/>
                
                
                    <FormLabel column>Last Name:</FormLabel>          
                    <FormControl 
                        type="text" 
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}/>
                
                    <FormLabel column>DOB:</FormLabel>
                    <FormControl 
                        type="text" 
                        value={dob}
                        onChange={e => setDob(e.target.value)}/>
                
                    <FormLabel column>Birth Place:</FormLabel>
                    <FormControl 
                        type="text" 
                        value={birthPlace}
                        onChange={e => setBirthPlace(e.target.value)}/>
                </div>
                <div className="edit-options">
                    <Button className="btn btn-primary" onClick={e => handleSubmit(e)}>Update</Button>
                    <Button className="btn btn-primary" onClick={e => handleDelete(e)}>Delete</Button>
                    <Button className="btn btn-primary" onClick={e => {setEditMode(false); setEdit(false)}}>Cancel</Button>  
                </div>
            </div>                                       
            </div>
        )
    

        
    }

    const PopupBox = () => {
        return (
            <div className="popupBox row">
                <div className="col left">
                    <h4>Me</h4>
                    <img src={woman} />
                </div>
                <div className="col">
                    <p><b>Birth:</b> 1998</p>
                    <p><b>Death:</b> Living</p>
                </div>
                <div className="col button-column">
                        <Button className=" btn btn-primary">Profile</Button>
                        <Button className=" btn btn-primary">Search</Button>
                        <Button className=" btn btn-primary"
                            onClick={()=> showEdit ? setEdit(false) : setEdit(true)}
                        >Edit</Button>
                </div>
            </div>
        
        )
        
    }

    
    return (
        <div className="family-tree">
        <div id="editor"></div>
            <div className="grandparents">
                <div className="paternal">
                    <div className="grandpa node">
                            <img src={man} />
                            <p>Grandpa</p>
                    </div>
                </div>
                <div className="maternal">
                    <div className="grandma node">
                        <img src={woman} />
                        <p>Grandma</p> 
                    </div>
                </div>
            </div>
            <div className="parents">
                <div className="paternal">
                    <div className="dad node">
                            <img src={man} />
                            <p>Father</p>
                    </div>
                </div>
                <div className="maternal">
                    <div className="mom node" onClick={() => showPopup ? setPopup(false) : setPopup("mom")}>
                        <img src={woman} />
                        <p>Mother</p> 
                    </div>
                </div>
            </div>
            <div className="me">
                <div className="node" id="me" onClick={() => showPopup ? setPopup(false) : setPopup("me")}>
                    <img src={woman} />
                    <p>Me</p>
                </div>
            </div>
            
            {showPopup && (<PopupBox/>)}
            {showEdit && (<FamilyMember />)}
        </div>
    );
}