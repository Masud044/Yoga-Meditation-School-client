import { useEffect } from "react";
import { useState } from "react";


const useAllInstructor = () => {
    const [allInstructor, setAllInstructor] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                setAllInstructor(data);
                setLoading(false)
            })
    }, [])
    return [allInstructor,loading]
};

export default useAllInstructor;