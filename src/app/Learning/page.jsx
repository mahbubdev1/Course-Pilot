import React from "react";
import SupportCards from "../components/LearningPage/SupportCards";
import FAQSection from "../components/LearningPage/FAQSection";
import LearningPath from "../components/LearningPage/LearningPath";

const page = () => {
  return (
    <div>
      <LearningPath />
      <SupportCards />
      <FAQSection />
    </div>
  );
};

export default page;
