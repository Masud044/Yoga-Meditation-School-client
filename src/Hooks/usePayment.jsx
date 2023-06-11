import { useEffect } from "react";
import { useState } from "react";


const usePayment = () => {
    const [payment, setPament] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/payment')
            .then(res => res.json())
            .then(data => {
                setPament(data);
                setLoading(false)
            })
    }, [])
    return [payment,loading]
};

export default usePayment;