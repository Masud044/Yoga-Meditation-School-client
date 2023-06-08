
import InstructorCard from "./InstructorCard";
import useInstructor from "../../../Hooks/useInstructor";


const InstructorSection = () => {
         const [instruction] = useInstructor(); 
   
    return (
        <div className="mt-8"> 
               <p className="text-slate-400 text-center font-semibold text-2xl">----------------------</p>
               <h1 className="text-3xl mt-4 mb-4 font-semibold text-center text-amber-400 ">Popular Instructor Section</h1>
               <p className="text-slate-400 text-center text-2xl font-semibold ">-----------------------</p>

               <div className="grid md:grid-cols-3 gap-6  mt-6 ">
                   {
                     instruction.slice(0,6).map(instructor=> <InstructorCard key={instructor._id}
                      instructor = {instructor}
                     
                     ></InstructorCard>)
                   }
                  
            </div>
        </div>
    );
};

export default InstructorSection;