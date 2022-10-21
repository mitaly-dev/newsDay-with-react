import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContext';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';
import Image from 'react-bootstrap/Image'
import './Header.css'
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const {user ,logOut} = useContext(AuthContext)
    const navigate= useNavigate()

    const logOutHandle=()=>{
        logOut()
        toast.success('Log out successfull')
    }
    const logInHandle=()=>{
        navigate('/login')
    }
 
    return (
        <div>
              <Navbar collapseOnSelect expand="lg" variant="light" className='main mb-4 text-light'>
                <Container>
                    <Navbar.Brand href="#home" className='text-light'>
                        <span className='logo bg-primary' >News</span>Day
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='hambargur'/>
                    <Navbar.Collapse id="responsive-navbar-nav"  className='hambargur'>
                    <Nav className="me-auto text-light ps-5 d-none d-lg-block">
                        <NavLink className="navlink text-light" to="/">Home</NavLink>
                        <NavLink className="navlink text-light" to="category">Category</NavLink>
                        <NavLink className="navlink text-light" to="news">News</NavLink>
                    </Nav>
                    <Nav className='flex align-items-center'>
                        { 
                            user?.uid ? 
                            <>
                            <span className='me-3'>{user?.displayName}</span>
                            <Button onClick={logOutHandle} variant="outline-primary">Log Out</Button>
                            </>:
                            <Button onClick={logInHandle} variant="outline-primary">Log In</Button>
                         
                        }
                       <Link to="/profile">
                            {
                                user?.photoURL ?
                                <div className='profile-img ms-3'>
                                {
                                    <Image src={user?.photoURL} alt="" roundedCircle/>
                                }
                                </div> : <FaUser className='ms-3'></FaUser>
                            }
                       </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                        <RightSideNav></RightSideNav>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;