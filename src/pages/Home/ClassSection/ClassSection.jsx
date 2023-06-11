
import ClassSectionShow from "./ClassSectionShow";
import useClass from "../../../Hooks/useClass";
import 'animate.css';
import {Fade } from "react-awesome-reveal";




const ClassSection = () => {

   const[classSection] = useClass();


    return (
        <div>
             <Fade delay={1e3} cascade damping={1e-1}>
             <p className="text-slate-400 text-center font-semibold text-2xl">----------------------</p>
            <h1 className="animate__animated animate__rotateIn text-3xl mt-4 mb-4 font-semibold text-center text-amber-400 ">Popular Class Section</h1>
            <p className="text-slate-400 text-center text-2xl font-semibold ">-----------------------</p>
             </Fade>
           

            <div className="grid md:grid-cols-3 gap-6  mt-6">

                {
                    classSection.slice(0, 6).map(item => <ClassSectionShow key={item._id}
                        item={item}

                    ></ClassSectionShow>)


                }


            </div>
        </div>
    );
};

export default ClassSection;