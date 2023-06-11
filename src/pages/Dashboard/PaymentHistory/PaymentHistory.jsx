import usePayment from "../../../Hooks/usePayment";


const PaymentHistory = () => {
    const [payment] = usePayment();
    return (
        <div>
              <h1 className="font-bold text-3xl text-center">Payment History</h1>

              <div className="overflow-x-auto mt-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-black">
                            <th className="font-bold text-black">
                                #
                            </th>
                          
                            <th className="font-bold text-black">ClassName</th>
                            <th className="font-bold text-black">Price</th>

                            <th className="font-bold text-black">Date</th>
                            <th className="font-bold text-black">TransactionID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((item, index) => <tr key={item._id} >
                                <td>
                                    {index + 1}
                                </td>
                               
                                <td>
                                    {item.className}
                                </td>
                                <td>${item.price}</td>

                                <td>
                                   {item.date}
                                </td>
                                <td>
                                    {item.transactionId}
                                </td>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;