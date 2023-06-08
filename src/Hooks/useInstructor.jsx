import { useEffect, useState } from "react";


const useInstructor = () => {
   
            const [instruction,setInstruction]= useState([]);
            const [loading,setLoading] = useState(true);
               useEffect(() => {
                fetch('instructor.json')
                    .then(res => res.json())
                    .then(data => 
                        {
                         setInstruction(data);
                         setLoading(false);
                        }
                        )
            }, [])
              return [instruction,loading];  
   
};

export default useInstructor;