import React from "react";
import Template from "./Template";
import signupimg from "../Images/signupimg.jpg";

function SignUp({ setIsLogin }) {
  return (
    <div>
      <Template
        setIsLogin={setIsLogin}
        title="Join the millions learning to code with StudyNotion for free"
        desc="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupimg}
        formType="signUp"
      />
    </div>
  );
}

export default SignUp;
