import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContext';

const Login = () => {
    const {
        user,
        setLoading,
        signInHandle
    } = useContext(AuthContext)

    const [email,setEmail] = useState()
    const [emailError,setEmailError] = useState()
    const [password,setPassword] = useState()
    const [disabled,setDisabled]= useState(true)
    let navigate =useNavigate()
    let location = useLocation()
    let from = location?.state?.from?.pathname || "/"

  
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
       setPassword(pass)
    }

    const checked=(event)=>{
        if(event.target.checked){
            setDisabled(false)
            return
        }
        setDisabled(true)
    }

    const userSignIn=(event)=>{
        event.preventDefault()
       if(email,password){
            signInHandle(email,password)
            .then(result=>{
                const user= result.user
                if(user?.emailVerified){
                    toast.success('Successfully login')
                    navigate(from,{replace:true})
                }
                else{
                    toast.error('Email is not verified')
                }
            })
            .catch(error=>toast.error(error.message))
            .finally(()=>{setLoading(false)})
       }
       else{
            toast.error('Please provide us a valid information')
        }
    }
   
    return (
        <>
        <h3 className='text-center mb-4'>login</h3>
        <div className='form-container'>
             <Form onSubmit={userSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" className='py-2'/>
                    <p className='error-handle text-danger'>{emailError}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" className='py-2'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={checked} type="checkbox" label="Accept Terms & Conditions" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={disabled}>
                    Register
                </Button>
                <p className='text-center pt-4'>Didn't have an account ? <Link to="/register">Register Now</Link></p>
            </Form>
        </div>
        </>
    );
};

export default Login;

















// import React, { useContext, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { Form, Link, useNavigate } from 'react-router-dom';

// const Login = () => {
   
//     const [name,setName] = useState()
//     const [email,setEmail] = useState()
//     const [emailError,setEmailError] = useState()
//     const [password,setPassword] = useState()
//     const [passwordError,setPasswordError] = useState()
//     const [disabled,setDisabled]= useState(true)
//     const navigate =useNavigate()

//     const handleName=(event)=>{
//         setName(event.target.value)
//     }
//     const handleEmail=(event)=>{
//         const mail=event.target.value
//         if(!/\S+@\S+\.\S+/.test(mail)){
//             setEmailError('Email is not valid')
//             return
//         }
//         setEmailError(" ")
//         setEmail(mail)
//     }

//     const handlePassword=(event)=>{
//         const pass = event.target.value
//         setPassword(pass)
//     }

//     const checked=(event)=>{
//         if(event.target.checked){
//             setDisabled(false)
//             return
//         }
//         setDisabled(true)
//     }

//     // const userSignInHandle=(event)=>{
//     //     event.preventDefault()
//     //     const form = event.target
//     // }


//     return (
       
//         <>
//          <h3>hello bandladesh</h3>
//         <h3 className='text-center mb-4'>Log In</h3>
//         <div className='form-container'>
//              <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>UserName</Form.Label>
//                     <Form.Control onBlur={handleName} type="text" placeholder="Enter name" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
//                     <Form.Text className="text-muted text-danger">
//                     {emailError}
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
//                     <Form.Text className="text-muted text-danger">
//                     {passwordError}
//                     </Form.Text>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check onChange={checked} type="checkbox" label="Check me out" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit" disabled={disabled}>
//                     Log In
//                 </Button>
//                 <p>Didn't have an account ? <Link to="/register">register</Link></p>
//             </Form>
//         </div>
//         </>
//     );
// };

// export default Login;