import React from 'react';

const Testimonial = (props) => {
    const {name,quote,from ,img} = props.testimonial;
    return (
        <div style={{margin:'20px'}} className="col-md-3 text-center bg-dark" >
            <div className="card-body">
                <p className="text-primary">{name}</p>
            </div>
            <div className="card shadow-sm">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 style={{margin:'10px'}} className="card-text text-center">{quote}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;