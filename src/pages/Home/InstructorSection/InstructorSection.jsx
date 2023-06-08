

const InstructorSection = () => {
    return (
        <div className="mt-8 o bg-orange-300 bg-opacity-20 bg-gradient-to-r from-orange-500"> 
               <p className="text-slate-400 text-center font-semibold text-2xl">----------------------</p>
               <h1 className="text-3xl mt-4 mb-4 font-semibold text-center text-white ">Popular Instructor Section</h1>
               <p className="text-slate-400 text-center text-2xl font-semibold ">-----------------------</p>

               <div className="grid md:grid-cols-3 gap-6  mt-6 ">
                <div>
                    <img className="rounded-full" src="https://i.ibb.co/MVj0Z3H/Aaron-300x300.jpg" alt="" />
                    <h1 className="font-medium text-2xl">Aaron Krohn</h1>
                </div>
                <div>
                    <img className="rounded-full" src="https://i.ibb.co/4TpzpJx/Enrico-Tambellini-300x300.jpg" alt="" />
                    <h1 className="font-medium text-2xl">Keith Allen</h1>
                </div>
                <div>
                    <img className="rounded-full" src="https://i.ibb.co/fqvCfSv/Matt-300x300.jpg" alt="" />
                    <h1 className="font-medium text-2xl">Enrico Tambellini</h1>
                </div>
                <div>
                    <img className="rounded-full" src="https://i.ibb.co/WGGNMb3/John-300x300.jpg" alt="" />
                    <h1 className="font-medium text-2xl">Jhon Tamayo</h1>
                </div>
                <div>
                    <img className="  h-80 w-100 rounded-full" src="https://i.ibb.co/KW8JTZz/top-yoga-teacher-300x300.jpg" alt="" />
                    <h1 className="font-medium text-2xl">Nisha</h1>
                </div>
                <div>
                    <img className="rounded-full" src="https://i.ibb.co/Vg8Lr6s/Keith-300x300.jpg" alt="" />
                    <h1 className="font-medium text-2xl">Jhon Tamayo</h1>
                </div>

            </div>
        </div>
    );
};

export default InstructorSection;