import React from "react";
import SupportCards from "../components/LearningPage/SupportCards";
import FAQSection from "../components/LearningPage/FAQSection";
import LearningPath from "../components/LearningPage/LearningPath";
import Mentor from "../components/LearningPage/Mentor";

const page = () => {
  return (
    <div>
      <LearningPath />
      <SupportCards />
      <Mentor />
      <FAQSection />
    </div>
  );
};

export default page;
