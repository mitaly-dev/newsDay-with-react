import React from 'react';
import { Link } from 'react-router-dom';
import './Errorpage.css'

const Errorpage = () => {
    return (
        <div className='error'>
            <div className='text-center'>
            <h1>Page Not Found</h1>
            <Link to="/" className='text-center'>Go Back Home</Link>
            </div>
        </div>
    );
};

export default Errorpage;