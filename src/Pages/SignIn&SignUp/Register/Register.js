import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContext';
import './Register.css'


const Register = () => {
    const {createUser,logOut ,emailVerification ,updateProfileHandle ,logOutHandle} = useContext(AuthContext)
    const [name,setName] = useState()
    const [photo,setPhoto] = useState()
    const [email,setEmail] = useState()
    const [emailError,setEmailError] = useState()
    const [password,setPassword] = useState()
    const [passwordError,setPasswordError] = useState()
    const [disabled,setDisabled]= useState(true)
    const navigate =useNavigate()

    const handleName=(event)=>{
        setName(event.target.value)
    }
    const handlePhoto=(event)=>{
        setPhoto(event.target.value)
    }
    const handleEmail=(event)=>{
        const mail=event.target.value
        if(!/\S+@\S+\.\S+/.test(mail)){
            setEmailError('Email is not valid')
            return
        }
        setEmailError(" ")
        setEmail(mail)
    }
    const handlePassword=(event)=>{
        const pass = event.target.value
       if(pass.length<6){
        setPasswordError('Password should be at least 6 degit')
        return
       }
       setPasswordError(" ")
       setPassword(pass)
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
        if(name,email,password,photo){
            createUser(email,password)
            .then((result)=>{
                toast.success('Successfully Register',{autoClose:1000})
                emailVerification()
                updateUserProfile()
                logOut()
                navigate('/login')
                
            })
            .catch(error=>toast.error(error.message))
        }
        else{
            toast.error('Please provide us a valid information',{autoClose:1000})
        }
    }

    const updateUserProfile=()=>{
        updateProfileHandle(name,photo)
        .then(()=>{})
    }

    return (
        <>
        <h3 className='text-center mb-4'>Register</h3>
        <div className='form-container'>
             <Form onSubmit={createUserHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter name" className='py-2'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control onBlur={handlePhoto} type="text" placeholder="Enter photoURL" className='py-2'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" className='py-2' />
                    <p className='error-handle text-danger'>{emailError}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" className='py-2'/>
                    <p className='error-handle text-danger'>{passwordError}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={checked} type="checkbox" label="<Link>Accept Terms & Conditions</Link>"/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={disabled}>
                    Register
                </Button>
                <p className='pt-4 text-center'>Already have an account ? <Link to="/login">Log in</Link></p>
            </Form>
        </div>
        </>
    );
};

export default Register;