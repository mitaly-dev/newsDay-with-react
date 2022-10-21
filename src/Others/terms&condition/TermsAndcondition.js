import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TermsAndcondition = () => {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut, quos quam accusamus minus laboriosam voluptas, tempora dicta vel optio natus. Aut incidunt sint adipisci, cumque ipsum dignissimos rerum asperiores.</p>
            <Link to="/register">Back <FaArrowAltCircleRight></FaArrowAltCircleRight></Link>
        </div>
    );
};

export default TermsAndcondition;