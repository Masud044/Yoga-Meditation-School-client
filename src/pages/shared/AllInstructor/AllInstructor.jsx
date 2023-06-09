
import useClass from "../../../Hooks/useClass";



const AllInstructor = () => {
    const[classSection] = useClass();
    return (

         <div className="grid md:grid-cols-3 gap-4">
              {
                 classSection.map(item=>   <div key={item._id} className="card w-96 bg-amber-400 pt-4 hover:bg-amber-300 hover:text-white bg-opacity-20  shadow-2xl">
                 <figure><img className="h-25 w-45 rounded-full" src={item.instructorImage} alt="Shoes" /></figure>
                 <div className="card-body">
                     <h2 className="card-title">{item.instructorName}</h2>
                     <p className="font-medium">{item.email}</p>
                     
                 </div>
             </div>
              )
              }
         </div>
       
    );
};

export default AllInstructor;