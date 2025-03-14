import Footer from "../shared/Footer";
import Banner from "./Banner";
import StatsSection from "./StatsSection";
import StudentSuccessStories from "./StudentSuccessStories";

const HomePage = () => {
  return (
    <div>
      <div>
        <Banner />
        <StatsSection />
        <StudentSuccessStories></StudentSuccessStories>
      </div>
    </div>
  );
};

export default HomePage;
