import React from 'react';
import Deals from '../Deals/Deals';

const OrderData = (props) => {
    console.log(props);
    const { name, imageURL, _id } = props.airplane
    const bookStyle = {  color:'white',border: '0px solid gray', borderRadius:'5px',marginLeft:'23%',marginRight:'33%' ,padding:'10%' }
    const imageStyle = { hight: '250px', width: '200px', borderRadius: '2px' }

    return (
        <div className="row " >

            <div className="col-md-5" style={bookStyle}>
                <h6>OrderId </h6>
                <p>{_id}</p>
                <img style={imageStyle} src={imageURL} alt="" />
                <br />
                <br />
                <strong>
                    {name}</strong>


                <br />


            </div>

        </div>
    );
};


export default OrderData;