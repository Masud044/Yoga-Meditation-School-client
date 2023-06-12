import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageUser = () => {


    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })


    const handleMakeAdmin=user=>{
              fetch(`http://localhost:5000/users/admin/${user._id}`,{
                  method:'PATCH'
              })
              .then(res=>res.json())
              .then(data=>{
                  console.log(data)
                  if(data.modifiedCount){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                  }
              })
    }

    
    const handleMakeInstructor=user=>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                const instructoruser ={name: user.name, email: user.email, image: user.image}
                console.log(instructoruser)
              fetch('http://localhost:5000/instructor',{
                 method:'POST',
                 headers:{
                    'content-type':'application/json'
                 },
                 body:JSON.stringify(instructoruser)

                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        // refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${user.name} is an Instructor`,
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
              
             
            }
        })
    } 
   
   

    return (
        <div>
               <Helmet><title>Yoga| manageUser</title></Helmet>


               <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="font-bold text-black">#</th>
                            <th className="font-bold text-black">Name</th>
                            <th className="font-bold text-black">Email</th>
                            <th className="font-bold text-black">Make Admin</th>
                            <th className="font-bold text-black">Make Instructor</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-amber-600  text-white"><FaUserShield></FaUserShield></button> 
                                    }</td>
                                <td>{ user.role === 'instructor' ? 'instructor' :
                                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-amber-600  text-white"><FaUserShield></FaUserShield></button> 
                                    }</td>
                             
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;