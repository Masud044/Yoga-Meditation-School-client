import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useEffect, useState } from "react";

import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";


const CheckoutForm = ({image,className,price,ClassId,_id}) => {
    // console.log(price,ClassId,_id)
    const {user} = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing,setProcessing] = useState(false);
    const [transactionId,setTransactionId] = useState('');

    useEffect(()=>{
         fetch('http://localhost:5000/create-payment-intent',{
             method:'POST',
             headers:{
                'content-type':'application/json'
             },
             body:JSON.stringify({price})
         })
         .then(res=>res.json())
         .then(data=>{
            
             
              setClientSecret(data.clientSecret)
         })
    },[price])

    const handleSubmit = async (event)=>{
         event.preventDefault();

         if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('error',error)
            setCardError(error.message)
        }
        else{
            setCardError('');
            // console.log('paymentmethod',paymentMethod)
        }
      
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if(confirmError){
            console.log(confirmError)
        }
        console.log(paymentIntent);
        setProcessing(false);

        if(paymentIntent.status==='succeeded'){
            setTransactionId(paymentIntent.id);

             const payment = {email:user?.email,transactionId:paymentIntent.id,
                price,ClassId,_id,
                date:new Date(),
                image,
                className

            }
            fetch('http://localhost:5000/payment',{
                 method:'POST',
                 headers:{
                    'content-type':'application/json'
                 },
                 body:JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
                  console.log(data);
                  if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully Payment',
                        showConfirmButton: false,
                        timer: 1500
                      })
                  }
            })



           
        }

    }
    return (
        <>
             <form className="w-96 m-10" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-amber-400 ">{cardError}</p>}
            {transactionId && <p className="text-amber-500">Transaction complete and transactionId : {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;