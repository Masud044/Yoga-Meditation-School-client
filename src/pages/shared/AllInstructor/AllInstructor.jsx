
import useAllInstructor from "../../../Hooks/useAllInstructor";




const AllInstructor = () => {
     const [allInstructor] = useAllInstructor();
    return (

         <div className="grid md:grid-cols-3 gap-4">
              {
                 allInstructor.map(item=>   <div key={item._id} className="card w-96 bg-amber-400 pt-4 hover:bg-amber-300 hover:text-white bg-opacity-20  shadow-2xl mt-20">
                 <figure><img className="h-25 w-45 rounded-full" src={item.image} alt="Shoes" /></figure>
                 <div className="card-body">
                     <h2 className="card-title">{item.name}</h2>
                     <p className="font-medium">{item.email}</p>
                     
                 </div>
             </div>
              )
              }
         </div>
       
    );
};

export default AllInstructor;