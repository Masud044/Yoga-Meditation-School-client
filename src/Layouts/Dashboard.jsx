import { Helmet } from "react-helmet-async";

import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import { FaBook, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import Footer from "../pages/shared/Footer/Footer";



const Dashboard = () => {
    return (
        <div>

          <NavBar></NavBar>
            <Helmet><title>Yoga|dashboard</title></Helmet>


            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-amber-400">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  ">
                    <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                            <li><NavLink to="/"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
                            <li><NavLink to="/"><FaUsers></FaUsers> All Users</NavLink></li>
                            
                     
                            <li><NavLink to="/"><FaHome></FaHome> User Home</NavLink></li>
                           
                            <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/myclass"><FaShoppingCart></FaShoppingCart> My class
                                   
                                </NavLink>

                            </li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;