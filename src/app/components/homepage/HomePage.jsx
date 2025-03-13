import AvailableCourse from "../AvailableCourse/AvailableCourse";
import Banner from "./Banner";
import StatsSection from "./StatsSection";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <AvailableCourse></AvailableCourse>
      <StatsSection />
    </div>
  );
};

export default HomePage;
