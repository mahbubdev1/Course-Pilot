import AvailableCourse from "../AvailableCourse/AvailableCourse";
import Banner from "./Banner";
import StatsSection from "./StatsSection";

const HomePage = () => {
    return (
        <div>
            <AvailableCourse></AvailableCourse>
            <Banner />
            <StatsSection />
        </div>
    );
};

export default HomePage;
