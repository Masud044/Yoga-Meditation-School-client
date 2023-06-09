import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useInstructor = () => {
    const {user, loading} = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isInstructor, refetch} = useQuery({
        queryKey: ['isInstructor', user?.email],
         enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`)
            return res.json();
        }
    })
    return [isInstructor, refetch]
};

export default useInstructor;