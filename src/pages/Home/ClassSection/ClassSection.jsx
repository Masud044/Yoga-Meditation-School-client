
import ClassSectionShow from "./ClassSectionShow";
import useClass from "../../../Hooks/useClass";


const ClassSection = () => {

   const[classSection] = useClass();


    return (
        <div>

            <p className="text-slate-400 text-center font-semibold text-2xl">----------------------</p>
            <h1 className="text-3xl mt-4 mb-4 font-semibold text-center text-amber-400 ">Popular Popular Section</h1>
            <p className="text-slate-400 text-center text-2xl font-semibold ">-----------------------</p>

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