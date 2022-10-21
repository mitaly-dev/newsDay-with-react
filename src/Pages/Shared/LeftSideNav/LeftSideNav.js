import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
            fetch('http://localhost:5000/categories')
            .then(res=>res.json())
            .then(data=>setCategories(data))    
    })
  
    return (
        <div>
            <h3 className='mb-3'>All Category</h3>
            <div>
                {
                    categories.map(category=>
                    <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;