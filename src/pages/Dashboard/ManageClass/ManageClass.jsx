import { useState } from "react";
import useClass from "../../../Hooks/useClass";



const ManageClass = () => {
   
   
    const [classSection] =useClass();
    const [newclass,setNewclass]= useState([]);
    const [isDisabled,setIsDisabled]= useState([]);
   


    const handleApproveClick = item => {
          
          fetch(`http://localhost:5000/class/${item._id}`,{
             method:'PATCH',
             headers:{
                'content-type':'application/json',
             },
             body:JSON.stringify({status:'Approved'})
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              if(data.modifiedCount>0){
                setIsDisabled((pre) => 
                    [...pre, item._id,] 
                    );
                 const remain = classSection.filter(section=>section._id!== item._id);
                 const updated = classSection.find(section=>section._id===item._id);
                 updated.status = 'Approved';
                 const newclass = [updated,...remain];
                 setNewclass(newclass)
                
               
              }
          })
      };

     const  handleDeny=item=>{
        fetch(`http://localhost:5000/class/${item._id}`,{
            method:'PATCH',
            headers:{
               'content-type':'application/json',
            },
            body:JSON.stringify({status:'Deny'})
         })
         .then(res=>res.json())
         .then(data=>{
             console.log(data);
             if(data.modifiedCount>0){
               setIsDisabled((pre) => [...pre, item._id]);
                const remain = classSection.filter(section=>section._id!== item._id);
                const updated = classSection.find(section=>section._id===item._id);
                updated.status = 'Deny';
                const newclass = [updated,...remain];
                setNewclass(newclass)
               
              
             }
         })
         
     }
    return (
        <div>
              <h2 className="font-bold text-3xl  text-center mb-4">Manage Class{classSection.length}</h2>


              <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-black">
                            <th>
                                #
                            </th>
                            <th >Class Image</th>
                            <th>Class Name</th>
                            <th>instructor Name</th>
                            <th>instructor Email</th>
                            <th>Available Seat</th>

                            <th>Price</th>
                            <th>status</th>
                            <th>Approved</th>
                            <th>Deny</th>
                         
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           classSection.map((item, index) => <tr key={item._id} >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.className}
                                </td>
                                <td>{item?.instructorName}</td>

                                <td>
                                {item.email} 
                                </td>
                                <td>
                                  {item.availableSeats}
                                </td>
                                <td>
                                  ${item.price}
                                </td>
                                <td className="font-bold">
                                 {
                                     item.status
                                 }
                                 
                              
                                </td>
                                <td>
                                <button disabled={isDisabled.includes(item._id)}  onClick={()=>handleApproveClick(item)} className="btn btn-ghost bg-amber-400  text-black">Approved</button>
                                </td>
                                <td>
                                <button onClick={()=>handleDeny(item)}  disabled={isDisabled.includes(item._id)} className="btn  bg-amber-400 ">deny</button>
                                </td>
                                <td>
                                <button  className="btn btn-outline ">Feedback</button>
                                </td>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageClass;
