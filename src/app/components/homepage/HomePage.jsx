import Footer from "../shared/Footer";
import Banner from "./Banner";
import Headline from "./Headline";
import Review from "./Review";
import StatsSection from "./StatsSection";
import StudentSuccessStories from "./StudentSuccessStories";

const HomePage = () => {
  return (
    <div>
      <div>
        <Banner />
        <Headline />
        <Review />
        <StatsSection />
        <StudentSuccessStories></StudentSuccessStories>
      </div>
    </div>
  );
};

export default HomePage;
