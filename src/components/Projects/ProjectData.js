import React from 'react';
import { Link } from 'react-router-dom';

const ProjectData = (props) => {
    const {name,imageURL,_id} = props.airline
    const airlineStyle =  {backgroundColor:'white' , color:'black',border: '0px solid gray', borderRadius:'5px',margin:'5%', padding:'5%'}
    const imageStyle = {hight:'130px', width:'130px', borderRadius:'5px'}
   
    return (
        <div  className="col-md-4" style={airlineStyle}>
        <div className="teams" className="App"  >
     <img style={imageStyle} src={imageURL} alt=""/>
     <h6 className="writer mt-3 mb-3" >{name}</h6>
     <div>
     <Link to={`/order/${_id}`}>
         <button className="btn btn-info"
         >Book Now</button>
         </Link>
     </div>
 </div>
 </div>
    );
};

export default ProjectData;