import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShare, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import './CategoryNews.css'

const CategoryNews = ({category}) => {
    let {author,image_url,details,total_view,_id,title,thumbnail_url,rating}=category
  
    return (
        <Card className="mb-4 text-dark">
      <div className='content-title d-flex justify-content-between align-items-center '>
            <div className='d-flex'>
                <Image src={author.img} alt="author" style={{height:"50px"}} roundedCircle="true" />
                <div className='ps-3'>
                    <p className='mb-0 author-name'>{author.name}</p>
                    <small className='mb-0'>{author.published_date}</small>
                </div>
            </div>
            <div>
                <FaBookmark className='me-2'></FaBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
      </div>
      <Card.Body>
        <Card.Title className='text-center py-2'>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className='pt-3'>
          {
            details.length>250 ? 
            <span>{details.slice(0,250)+'....'}<Link to={`/news/${_id}`} className="read-more">Read More</Link></span> : <span>{details}</span>
          }
        </Card.Text>
      </Card.Body>
      <div className="content-title d-flex justify-content-between py-3">
            <div className='d-flex align-items-center'>
                <FaStar className='me-2 text-warning'></FaStar>
                {rating.number}
            </div>
            <div className='d-flex align-items-center'>
                <FaEye className='me-2'></FaEye>
                {total_view}
            </div>
      </div>
    </Card>
    );
};

export default CategoryNews;