import React from 'react';
import {Link, BrowserRouter } from "react-router-dom";

const Photo = (props) => {

    const { photo, index } = props;
    const date = photo.created_at;
    const date_val = date[0] + date[1] + date[2] + date[3] + date[4] + date[5] + date[6] + date[7] + date[8] + date[9];

    const divStyle = {
        backgroundImage: 'url(' + photo.urls.small + ')',
        width: '100%',
        height: '346px',
        backgroundPosition: 'center',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };

    return (
                        <div>
                                <div key={index} className='block-item'>
                                    <div className="block-img" style={divStyle}></div>
                                    <div className="block-author">
                                        <div><img className='block-author-img' src={photo.user.profile_image.small} /></div>
                                        <div><a className='block-author-text' href={photo.user.links.html} target="_blank">{photo.user.name}</a>
                                        <div className='create-date'>{date_val}</div>
                                        </div>
                                        <div className='block-like'>
                                            <div className='detal'><Link to={`/photo/${index}`}>View</Link></div>
                                            <div className='like'>
                                                <span className='fas fa-heart'></span>
                                                <div className='like-count'>{photo.likes}</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div> 
                        </div>
            
    );
};

export default Photo;