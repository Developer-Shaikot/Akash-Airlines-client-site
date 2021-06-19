import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import SplitForm from './SplotCardForm';


const stripePromise = loadStripe('pk_test_51Ihav2JGPXh2pU1fWYvSioxQl7dsHq1dj0Pk0L4GlMTduBn7WIM0iInz8u3ph5stkXDcpYRn0o9nxNjjuY7XO7YD00kgMPzfbZ');


const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
           <SplitForm></SplitForm>
        </Elements>
    );
};

export default Payment;