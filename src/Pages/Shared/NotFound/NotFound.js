import React from 'react';
import pageNotFoundImg from '../../../images/page-not-found.gif';

const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#F7F9FB' }}>
            <img src={pageNotFoundImg} alt="" />
        </div>
    );
};

export default NotFound;