import { Helmet } from "react-helmet-async";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import { FaBook, FaChild, FaHistory, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import Footer from "../pages/shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";



const Dashboard = () => {

     const { user } = useContext(AuthContext);
     const navigate = useNavigate();
   
   
    const [isAdmin] =useAdmin();
    const [isInstructor]=useInstructor();

    if(!user){
         return navigate('/');
    }
   
    
    return (
        <div>

            <NavBar></NavBar>
            <Helmet><title>Yoga|dashboard</title></Helmet>


            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-amber-400">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 mt-20 ">
                       

                      
                            {
                            
                            isAdmin?.admin && <><li><NavLink to="/"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manageclass"> <FaUtensils></FaUtensils> Manage class</NavLink></li>
                            <li><NavLink to="/dashboard/manageuser"><FaUsers></FaUsers> Manage Users</NavLink></li> </>
                            }

                           { isInstructor?.instructor && <>  <li><NavLink to="/"><FaWallet></FaWallet> Instruction Dashboard</NavLink></li>
                            <li><NavLink to="/dashboard/addclass"><FaWallet></FaWallet> Add Class</NavLink></li>
                            <li><NavLink to="/dashboard/instructorclass"><FaBook></FaBook>My Class </NavLink></li> </>
                           }

                          { (!isAdmin?.admin && !isInstructor?.instructor) &&  
                          <>  <li><NavLink to="/"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/"><FaHistory></FaHistory> Payment History</NavLink></li>
                                <li><NavLink to="/"><FaBook></FaBook> Enroll Class</NavLink></li>
        
                                <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/myclass"><FaChild></FaChild>
                                       Selected Class
        
                                    </NavLink>
        
                                </li> </>
                             }
                            
                            

 
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;