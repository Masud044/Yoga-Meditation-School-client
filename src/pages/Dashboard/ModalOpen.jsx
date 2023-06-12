
import { Link, useParams } from "react-router-dom";
import useInstructorClass from "../../Hooks/useInstructorClass";
import { useState } from "react";
import Swal from "sweetalert2";



const ModalOpen = () => {
 const {id} = useParams();
  const [instructor,refetch] = useInstructorClass();
  console.log(id);
  const [newclass, setNewclass] = useState([]);

 
    const handleSubmit=event=>{
      event.preventDefault();
      
       const form = event.target;
        const textarea = form.textarea.value;
       
      
        fetch(`http://localhost:5000/class/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({feedback:textarea})
        })
     .then(res=>res.json())
     .then(data=>{
       console.log(data)
       if (data.modifiedCount > 0) {
       
         refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'feedback is successfully done',
          showConfirmButton: false,
          timer: 1500
        })
        const remain = instructor.filter(section => section._id !== id);
        const updated = instructor.find(section => section._id === id);
        updated.feedback = textarea;
        const newclass = [updated, ...remain];
        setNewclass(newclass)
       


    }

    }
     )
  }
   
  return (
        <div className="mt-20">
         
              <Link to='/dashboard/manageclass'> <button className="bg-amber-400 p-3 rounded-lg mb-4">Back to Admin page</button></Link>

               <form onSubmit={handleSubmit} action="">

                   <textarea className="border-2" name="textarea"  cols="30" rows="10"></textarea> <br />
                   <input className="bg-amber-400 p-3 rounded-lg mt-10" type="submit" value="send" />
               </form>
        </div>
  );
};

export default ModalOpen;