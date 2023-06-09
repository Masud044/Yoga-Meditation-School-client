import { Helmet } from "react-helmet-async";
import useMyClass from "../../../Hooks/useMyClass";


const MyClass = () => {

    const [Class] = useMyClass();
    return (
        <div>
            <Helmet><title>Yoga| my class</title></Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead> 
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>AvailableSeat</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Class.map((item,index)=>
                                <tr key={item._id}>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }
                       
                        </tbody>
                     

                </table>
            </div>
        </div>
    );
};

export default MyClass;