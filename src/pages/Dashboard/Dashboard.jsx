import { Helmet } from "react-helmet-async";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";


const Dashboard = () => {
    return (
        <div>
             <Helmet><title>Yoga|Dashboard</title></Helmet>
              <NavBar></NavBar>
              <h1>this is dashboard</h1>
              <Footer></Footer>
        </div>
    );
};

export default Dashboard;