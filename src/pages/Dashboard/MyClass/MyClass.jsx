import { Helmet } from "react-helmet-async";
import useMyClass from "../../../Hooks/useMyClass";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyClass = () => {

    const [cart, refetch] = useMyClass();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myclass/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div className="w-full">
            <Helmet><title>Yoga| my class</title></Helmet>

            <button></button>
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
                            <th>Price</th>

                            <th>Delete</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id} >
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
                                <td>{item.price}</td>

                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-amber-400  text-black"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                    <Link to="/dashboard/payment">
                                        <button className="btn btn-ghost bg-amber-400">PAY</button>
                                    </Link>
                                </td>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClass;