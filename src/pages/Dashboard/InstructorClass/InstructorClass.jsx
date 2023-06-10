
import useInstructorClass from "../../../Hooks/useInstructorClass";


const InstructorClass = () => {

       const [instructor]= useInstructorClass();
       console.log(instructor)
    return (
        <div className="w-full px-6">
             <h2 className="font-bold text-3xl  text-center mb-4">TOTAL ADD CLASS: {instructor.length}</h2>
             <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-black">
                            <th>
                                #
                            </th>
                            <th >Class image</th>
                            <th>Name</th>
                            <th>Status</th>

                            <th>Enroll student</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           instructor.map((item, index) => <tr key={item._id} >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.className}
                                </td>
                                <td>{item.status}</td>

                                <td>
                                   0 
                                </td>
                                <td>
                                   no feedback
                                </td>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default InstructorClass;