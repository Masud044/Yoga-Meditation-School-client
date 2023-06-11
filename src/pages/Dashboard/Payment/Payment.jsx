import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";

import { useLocation } from "react-router-dom";

 const stripePromise = loadStripe(import.meta.env.VITE_payment_PK);
const Payment = () => {
   
    const location = useLocation();
     const queryParams = new URLSearchParams(location.search);
    const price = queryParams.get('price');
    const _id = queryParams.get('_id');
    const ClassId = queryParams.get('ClassID');
    const image = queryParams.get('image');
    const className = queryParams.get('className');
   
    return (
        <div>
             <Helmet><title>Yoga|Payment</title></Helmet>
             <h1 className="font-bold text-2xl">Payment</h1>
             <Elements stripe={stripePromise}>
                 <CheckoutForm  price={price} _id={_id} ClassId={ClassId} image={image} className={className}></CheckoutForm>
             </Elements>
        </div>
    );
};

export default Payment;