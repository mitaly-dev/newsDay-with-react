import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook , FaTwitter , FaYoutube , FaWhatsapp , FaDiscord , FaCommentMedical ,FaFilter , FaCalendar, FaGoogle, FaGithub} from 'react-icons/fa';
import { AuthContext } from '../../../Context/UserContext';
import RightNavCarousel from '../RightNavCarousel/RightNavCarousel';
import './RightsideNav.css'

const RightSideNav = () => {
    const {signWithGoogle ,signWithGithub} = useContext(AuthContext)
    return (
        <div>
            <div>
            <Button onClick={signWithGoogle} variant="outline-info" className='mb-2 px-5 social-btn'><FaGoogle className='me-2'></FaGoogle>Login via Google</Button>
            <Button onClick={signWithGithub} variant="outline-warning" className='mb-2 px-5 social-btn'><FaGithub className='me-2'></FaGithub>Login via Github</Button>
            </div>
            <div>
                    <h6 className='my-3'>Find Us On</h6>
                    <ListGroup>
                    <ListGroup.Item className='mb-2 border shadow-sm'><FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border shadow-sm'><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border shadow-sm'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border shadow-sm'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border shadow-sm'><FaDiscord></FaDiscord> Discord</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border shadow-sm'><FaCalendar></FaCalendar> Privacy Policy</ListGroup.Item>
                    <ListGroup.Item className='mb-2 border shadow-sm'><FaCommentMedical></FaCommentMedical>Term & Condition</ListGroup.Item>
                    </ListGroup>
              <RightNavCarousel></RightNavCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;