import AvailableCourse from "../AvailableCourse/AvailableCourse";
import Footer from "../shared/Footer";
import Banner from "./Banner";
import StatsSection from "./StatsSection";

const HomePage = () => {
    return (
        <div>
            <AvailableCourse></AvailableCourse>
            <Banner />
            <StatsSection />
            <Footer></Footer>
        </div>
    );
};

export default HomePage;
