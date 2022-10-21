import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaEye, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
  
    let {author,image_url,details,total_view,_id,title,thumbnail_url,rating,id}=news

    
    return (
            <Card className="mb-4 text-dark">
                <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Title className='text-center py-4'>{title}</Card.Title>
                        <div className='d-flex justify-content-between px-2'>
                            <p><h6 className='d-inline'>Author :</h6> {author.name}</p>
                            <p><h6 className='d-inline'>Published Date :</h6> {author?.published_date}</p>
                            <p><FaStar className='text-warning'></FaStar> <h6 className='d-inline'>{rating.number}</h6></p>
                        </div>
                <Card.Text>
                    {details}
                </Card.Text>
                </Card.Body>
                <div className="content-title d-flex justify-content-between py-3">
                    <Link to={`/category/${id}`}>Back <FaArrowAltCircleRight></FaArrowAltCircleRight></Link>
                    <div className='d-flex align-items-center'>
                        <FaEye className='me-2'></FaEye>
                        {total_view}
                    </div>
                </div>
            </Card>
    );
};

export default News;

