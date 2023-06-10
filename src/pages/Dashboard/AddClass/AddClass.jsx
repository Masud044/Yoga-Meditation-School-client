import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_image_hosting_token;

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const image_hosting_URL =`https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const{user} = useContext(AuthContext);
    

    const onSubmit = data=>{
       

         const formData = new FormData();
         formData.append('image', data.image[0])

        fetch(image_hosting_URL, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
           console.log(imgResponse);  
           if(imgResponse.success){
           const imgURL = imgResponse.data.display_url;
               
                 console.log(data,imgURL)
           
                const {instructorName, className, availableSeats,price,email} = data;
                const newClass = {instructorName,className,price:parseFloat(price),availableSeats:parseFloat(availableSeats), image:imgURL,email,status:"panding"}
                console.log(newClass)
           

                fetch('http://localhost:5000/class',{
                     method:'POST',
                     headers:{
                         'content-type':'application/json'
                     },
                     body:JSON.stringify(newClass)
                })
                 .then(res=>res.json())
                .then(data=>{
                    console.log('after posting new menu item', data)
                    if(data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
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
            <h1 className="text-3xl font-bold mb-6">Add Class</h1>

               <form  onSubmit={handleSubmit(onSubmit)}>

                 <div className="grid grid-cols-2 gap-4">
                 <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Class name</span>

                </label>
                <input type="text" {...register("className", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Class Image</span>
                   
                </label>
                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
              
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Instructor Name</span>

                </label>
                <input type='text' {...register("instructorName", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " value={user?.displayName} readOnly />

            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Instructor Email</span>

                </label>
                <input type='email' {...register("email", { required: true })} placeholder="Type here" value={user?.email} className="input input-bordered max-w-5xl " readOnly />

            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Available seats</span>

                </label>
                <input type="number" {...register("availableSeats", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Price</span>

                </label>
                <input type="number"{...register("price", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

            </div>
                 </div>

               
             <input className="bg-amber-400 mt-6 text-white rounded-lg p-3" type="submit" value="Add class" />
               </form>
        </div>
    );
};

export default AddClass;