
import InstructorCard from "./InstructorCard";


import useAllInstructor from "../../../Hooks/useAllInstructor";
import 'animate.css';


const InstructorSection = () => {
    const [allInstructor] =  useAllInstructor();
   
    return (
        <div className="mt-8"> 
               <p className="text-slate-400 text-center font-semibold text-2xl">----------------------</p>
               <h1 className="animate__animated animate__rotateIn text-3xl mt-4 mb-4 font-semibold text-center text-amber-400 ">Popular Instructor Section</h1>
               <p className="text-slate-400 text-center text-2xl font-semibold ">-----------------------</p>

               <div className="grid md:grid-cols-3 gap-6  mt-6 ">
                   {
                     allInstructor.slice(0,6).map(instructor=> <InstructorCard key={instructor._id}
                      instructor = {instructor}
                     
                     ></InstructorCard>)
                   }
                  
            </div>
        </div>
    );
};

export default InstructorSection;