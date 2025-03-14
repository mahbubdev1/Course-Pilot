import Footer from "../shared/Footer";
import Banner from "./Banner";
import Headline from "./Headline";
// import Review from "./Review";
import StatsSection from "./StatsSection";

const HomePage = () => {
  return (
    <div>
      <div>
        <Banner />
        <Headline />
        {/* <Review /> */}
        <StatsSection />
      </div>
    </div>
  );
};

export default HomePage;
