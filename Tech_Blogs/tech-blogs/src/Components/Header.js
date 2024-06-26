import React, { useContext } from "react";
import Theme from "./Theme";
import { AppContext } from "../AppContext";

function Header() {
  const { isDark } = useContext(AppContext);
  return (
    <div className={`w-[100%] mx-auto py-4 px-[2rem] md:px-[10rem] flex justify-between items-center fixed top-0 shadow-md ${isDark ? 'bg-dark' : 'bg-light'}`}>
      <h1 className="lg:text-[1.7rem] text-2xl font-bold">
        <span className={`${isDark ? 'text-darkBlue' : 'text-primary'}`}>Tech</span>Blogs
      </h1>
      <Theme />
    </div>
  );
}

export default Header;
