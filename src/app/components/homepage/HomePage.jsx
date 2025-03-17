import Banner from './Banner';
import Headline from './Headline';
import PopularInsights from './PopularInsights';
import Review from './Review';
import StatsSection from './StatsSection';
import StudentSuccessStories from './StudentSuccessStories';

const HomePage = () => {
  return (
    <div>
      <div>
        <Banner />
        <Headline />
        <Review />
        <PopularInsights></PopularInsights>
        <StatsSection />
        <StudentSuccessStories></StudentSuccessStories>
      </div>
    </div>
  );
};

export default HomePage;
