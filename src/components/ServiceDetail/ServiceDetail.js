import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center ">
            <img style={{height: '135px',borderRadius:'8px'}} src={service.img} alt="" />
            <h5  style={{color: 'white'}}  className="mt-2 mb-6">{service.name}</h5>
           
        </div>
    );
};

export default ServiceDetail;