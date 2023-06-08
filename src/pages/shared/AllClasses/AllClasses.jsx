import useClass from "../../../Hooks/useClass";


const AllClasses = () => {
    const [classSection] = useClass();
    return (
        <div className="grid md:grid-cols-3 gap-4">
              {
                classSection.map(item=><div key={item._id} className="card w-96 pt-4 bg-amber-400 bg-opacity-20 hover:bg-amber-300  hover:text-white shadow-2xl">
                <figure><img className="rounded-full" src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Yoga-Class: {item.className}</h2>
                    <p className="font-medium"> Price: ${item.price}</p>
                     <p className="font-medium">AvailableSeat:{item.availableSeats}</p>
                    <p className="font-medium">Instructor: {item.instructorName}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-amber-400 text-white">Add Select</button>
                    </div>
                </div>
            </div>)
              }
        </div>
    );
};

export default AllClasses;