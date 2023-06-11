import usePayment from "../../../Hooks/usePayment";


const EnrollClass = () => {

     const [payment] = usePayment();
    return (
        <div>
              <h1 className="font-bold text-3xl text-center"> Enroll Class</h1>


              <div className="overflow-x-auto mt-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-black">
                            <th className="font-bold text-black">
                                #
                            </th>
                          
                            <th className="font-bold text-black">ClassImage</th>
                            <th className="font-bold text-black">ClassName</th>
                            <th className="font-bold text-black">Email</th>
                          
                            <th className="font-bold text-black">Price</th>

                            <th className="font-bold text-black">Date</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((item, index) => <tr key={item._id} >
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
                                <td>
                                    {item.email}
                                </td>
                                <td>${item.price}</td>

                                <td>
                                   {item.date}
                                </td>
                                
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default EnrollClass;