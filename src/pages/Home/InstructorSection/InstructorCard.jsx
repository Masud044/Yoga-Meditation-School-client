
import {Slide } from "react-awesome-reveal";
const InstructorCard = ({instructor}) => {
    // console.log(instructor);
    const{email,name,image} = instructor;
    return (
        <Slide> <div className="card w-96 bg-amber-400 pt-4  hover:text-white bg-opacity-20 hover:bg-amber-400 shadow-2xl">
        <figure><img className="h-25 w-45 rounded-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="font-medium">{email}</p>
            
        </div>
    </div>
    </Slide>
       
    );
};

export default InstructorCard;