import { useEffect, useState } from "react";


const useClass = () => {
    const [classSection, setClassSection] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setClassSection(data);
                setLoading(false)
            })
    }, [])
    return [classSection,loading]
};

export default useClass;