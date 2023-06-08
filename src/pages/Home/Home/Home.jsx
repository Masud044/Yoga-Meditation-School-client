import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ClassSection from "../ClassSection/ClassSection";
import InstructorSection from "../InstructorSection/InstructorSection";


const Home = () => {
    return (
        <div className="data-theme">
               <Helmet>
               <title>  Yoga|Home  </title>
              </Helmet>
               <Banner></Banner>
               <ClassSection></ClassSection>
               <InstructorSection></InstructorSection>
        </div>
    );
};

export default Home;