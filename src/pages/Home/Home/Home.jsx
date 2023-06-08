import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ClassSection from "../ClassSection/ClassSection";
import InstructorSection from "../InstructorSection/InstructorSection";
import ExtraSection from "../ExtraSection";


const Home = () => {
    return (
        <div className="data-theme">
               <Helmet>
               <title>  Yoga|Home  </title>
              </Helmet>
               <Banner></Banner>
               <ClassSection></ClassSection>
               <InstructorSection></InstructorSection>
               <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;