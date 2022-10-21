import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryNews from './CategoryNews/CategoryNews';

const Category = () => {
    const categoryItem = useLoaderData()

    return (
       <div>
         <div>
            {
                categoryItem.map((category,index)=><CategoryNews key={index} category={category}></CategoryNews>)
            }
        </div>
       </div>
    );
};

export default Category;