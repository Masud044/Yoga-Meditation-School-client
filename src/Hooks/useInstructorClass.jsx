import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useInstructorClass = () => {
    const {user}= useContext(AuthContext);
     const {refetch, data: instructor = []  } = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async ()=>{
             const res = await fetch(`http://localhost:5000/class/${user?.email}`,)
             return res.json();
        },
      })
      return [instructor, refetch];
};

export default useInstructorClass;