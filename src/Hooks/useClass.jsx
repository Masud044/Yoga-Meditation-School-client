import { useEffect, useState } from "react";


const useClass = () => {
    const [classSection, setClassSection] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                setClassSection(data);
                setLoading(false)
            })
    }, [])
    return [classSection,loading]
};

export default useClass;