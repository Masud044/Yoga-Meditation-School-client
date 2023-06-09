
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
const useMyClass = () => {
     const {user}= useContext(AuthContext);
     const { isLoading, data: Class = []  } = useQuery({
        queryKey: ['myclass', user?.email],
        queryFn: async ()=>{
             const res = await fetch(`http://localhost:5000/myclass?email=${user.email}`)
             return res.json();
        },
      })
      return [Class, isLoading];
};

export default useMyClass;