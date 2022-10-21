import React, { useContext, useRef, useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { AuthContext } from '../../Context/UserContext';
import './Profile.css'


const Profile = () => {
    const {user} = useContext(AuthContext)
    const [name,setName] = useState()
    const [photo,setPhoto] = useState()
    const [email,setEmail] = useState()
    const [emailError,setEmailError] = useState()
    const [disabled,setDisabled]= useState(true)
    let nameRef=useRef(user?.displayName)
    

    console.log(user)

    const handleName=(event)=>{
        setName(event.target.value)
    }
    const handlePhoto=(event)=>{
        setPhoto(event.target.value)
    }
    const handleEmail=(event)=>{
        const mail=event.target.value
        setEmail(mail)
    }
    

    const checked=(event)=>{
        if(event.target.checked){
            setDisabled(false)
            return
        }
        setDisabled(true)
    }

    
    const createUserHandle=(event)=>{
        event.preventDefault()
        const form = event.target.value
        console.log(name,email,photo)
       
    }

    return (
        <>
        <div className='profileImg'><img src={user?.photoURL} alt="" /></div>
        <h3 className='text-center mb-4 mt-3 text-capitalize'>{user?.displayName}</h3>
        <div className='form-container'>
             <Form onSubmit={createUserHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control onBlur={handleName} ref={nameRef} defaultValue={user?.displayName} type="text" placeholder="Enter name" className='py-2'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control onBlur={handlePhoto} type="text" placeholder="Enter photoURL" className='py-2'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" readOnly  defaultValue={user?.email} placeholder="Enter email" className='py-2' />
                    <p className='error-handle text-danger'>{emailError}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={checked} type="checkbox" label="Accept Terms & Conditions"/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={disabled}>
                   Submit
                </Button>
            </Form>
        </div>
        </>
    );
};

export default Profile;