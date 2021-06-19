import React from 'react';
import './Services.css'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import Airport from '../../images/airport.jpg';
import Board from '../../images/food.jpg';
import Cargo from '../../images/cargo_lg.jpg';



const serviceData = [
    {
        name: 'AIRPORT SERVICES',
        img: Airport
    },
    {
        name: 'ON-BOARD YOUR FLIGHT',
        img: Board
        
    },
    {
        name: 'CARGO SERVICES',
        img: Cargo
    }
]
const Services = () => {
    return (
        <section className="services-container mt-4">
            
            <div className="text-center mt-2">
                <h5  style={{color: 'red',}}>Notice</h5>
                <p style={{color: 'white'}}>It is important that you arrive at check-in for your flight On-time. Check-in closes one hour before departure. The boarding gate normally closes 20 minutes prior to departure. This could vary depending on your departure airport.</p>
                <h2 style={{color: 'green'}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-2 pt-4">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
                {/* <Link to={`/services`}>
                 <button style={{TextAlign: 'center', justifyContent: 'center',marginLeft:'45%',marginBottom:'10%',padding: '10px'}} className="btn btn-warning">Get Airlines</button>
                 </Link> */}
                 
            </div>
        </div>
        </section>
    );
};

export default Services;