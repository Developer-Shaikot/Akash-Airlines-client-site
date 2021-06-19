import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Deals from '../Deals/Deals';
import image from '../../images/payment-methods.jpg'
import Navbar from '../Navbar/Navbar';

import './Order.css'
import OrderData from './OrderData';
import { Link } from 'react-router-dom';
import Payment from '../Payment/Payment';




const Order = () => {
    const { id } = useParams();
    const [airplane, setAirplane] = useState([])



    useEffect(() => {
        const url = `https://peaceful-woodland-82349.herokuapp.com/addAirline/${id}`;
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data[0]))
            .then(data => setAirplane(data[0]))
            ;
    }, [id])
    return (
        <section className="back">
            <Navbar></Navbar>
            <div className="row">
            
                <div className="col-md-5">

                    <OrderData airplane={airplane}>

                    </OrderData>

                </div>
                <div className="col-md-5 mt-5">
                    <Deals></Deals>
                </div>

            </div>
           
        </section>
    );
};

export default Order;