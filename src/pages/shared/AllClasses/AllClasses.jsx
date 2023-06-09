import { useContext } from "react";
import useClass from "../../../Hooks/useClass";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import {  useLocation, useNavigate } from "react-router-dom";
import useMyClass from "../../../Hooks/useMyClass";


const AllClasses = () => {
    const [classSection] = useClass();
    const{user}= useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const[ , refetch] = useMyClass();


     const handleAddClass=item=>{
        const{image,className,price,_id}= item;
          console.log(image);
          if(user && user.email){
            const classitem = {ClassID:_id,image,className,price,email:user?.email}
              fetch('http://localhost:5000/myclass',{
                  method:'POST',
                  headers:{
                     'content-type':'application/json'
                  },
                 body: JSON.stringify(classitem)
              })
              .then(res=>res.json())
              .then(data=>{
                 if(data.insertedId){
                   refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added on the myClass',
                        showConfirmButton: false,
                        timer: 1500
                      })
                 }
              })
          }
          else{
            Swal.fire({
                title: 'Please login to class',
           
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from: location}})
                }
              })
          }
     }
    return (
        <div className="grid md:grid-cols-3 gap-4">
              {
                classSection.map(item=><div key={item._id} className="card w-96 pt-4 bg-amber-400 bg-opacity-20 hover:bg-amber-300  hover:text-white shadow-2xl">
                <figure><img className="rounded-full" src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Yoga-Class: {item.className}</h2>
                    <p className="font-medium"> Price: ${item.price}</p>
                     <p className="font-medium">AvailableSeat:{item.availableSeats}</p>
                    <p className="font-medium">Instructor: {item.instructorName}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=> handleAddClass(item)} className="btn bg-amber-400 text-white">Add Class</button>
                    </div>
                </div>
            </div>)
              }
        </div>
    );
};

export default AllClasses;