import React from "react";
import Card from "./Card";

function CardContainer({ courses, category }) {
  const getAllCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };

  return (
    <div className="max-w-[80%] mt-4 py-10 flex flex-wrap justify-center items-center gap-6 mx-auto">
      {getAllCourses().map((c) => (
        <Card key={c.id} c={c} />
      ))}
    </div>
  );
}

export default CardContainer;
