import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../src/images/7ab6652b8aa3e4b3bd001525729ef05c.gif';

const HeaderMain = () => {
    return (
        <div>
            <main style={{height:'400px'}} className="row d-flex align-items-center text-center">
                <div className="col-md-4 offset-md-2">
                    <h1 style={{color:'cyan',fontStyle:'italic'}} >Your Journey Our <br/>Responsibility</h1>
                    <p style={{color:'white'}}>  An air transportation system including its equipment, routes, operating personnel, and management</p>

                      <Link to={`/services`}>
                 <button className="btn btn-primary">Get Airlines</button>
                 </Link>
                </div>
                <div className="col md-6 mt-2 mb-2">
                    <img style={{borderRadius:'5px',height:'200px', marginLeft:'7px'}} src={image} alt="" className="img-fluid"/>
                </div>
            </main>
        </div>
    );
};

export default HeaderMain;