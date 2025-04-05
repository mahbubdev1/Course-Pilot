import React from "react";
import Mentor from "../components/LearningPage/Mentor";
import Instructor from "../components/LearningPage/Instructor";
import Teacher from "../components/LearningPage/Teacher";
import Marketing from "../components/LearningPage/Marketing";

const page = () => {
  return (
    <div>
      <Instructor />
      <Teacher />
      <Mentor />
      <Marketing />
    </div>
  );
};

export default page;
