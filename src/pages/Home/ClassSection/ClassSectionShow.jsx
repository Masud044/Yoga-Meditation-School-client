import { Fade, Slide } from "react-awesome-reveal";

const ClassSectionShow = ({ item }) => {
    const { image, className, instructorName, availableSeats, price} = item;
    return (
        
           <Slide><div className="card w-96 pt-4 bg-amber-400 bg-opacity-20 hover:bg-amber-300  hover:text-white shadow-2xl">
           <figure><img className="rounded-full" src={image} alt="Shoes" /></figure>
           <div className="card-body">
               <h2 className="card-title text-2xl">Yoga-Class: {className}</h2>
               <p className="font-medium"> Price: ${price}</p>
                <p className="font-medium">AvailableSeat:{availableSeats}</p>
               <p className="font-medium">Instructor: {instructorName}</p>
               <div className="card-actions justify-end">
                   <button className="btn bg-amber-400 text-white">Add Now</button>
               </div>
           </div>
       </div>
       </Slide>
            
       
    );
};

export default ClassSectionShow;