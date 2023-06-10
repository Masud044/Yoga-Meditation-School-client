import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";



const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    
    const {data: isAdmin, refetch, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
           
            return res.json();
        }
    })
    return [isAdmin,isAdminLoading, refetch]
}
export default useAdmin;
