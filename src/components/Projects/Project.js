import React, { useEffect, useState } from 'react';
import './Project.css';
import ProjectData from './ProjectData';
import Navbar from '../Navbar/Navbar';
const Project = () => {
    
    const [airlines, setAirline] = useState([])


    useEffect(() => {
        const url = `https://peaceful-woodland-82349.herokuapp.com/addAirline`;
        fetch(url)
        .then(res => res.json())
        .then(data => setAirline(data));
    },[])


    return (
        <div className="back">
            <Navbar></Navbar>
            <div  className="text-center">
            
            <div style={{marginLeft:'15%',marginRight:'15%'}} className="row d-flex align-items-center p-5" >
            <h2 style={{color: 'white'}}>Book Your Tickets</h2>
            {
                airlines.length === 0 && <div className="text-white">...Loading</div>
            }
            {
                airlines.map(airline => <ProjectData airline={airline}></ProjectData>)
            }

            </div>
        </div>

        </div>
    );
};

export default Project;