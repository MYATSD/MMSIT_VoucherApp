import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link
      to={url}
      className="bg-teal-400 h-full flex gap-3 flex-col items-center p-5 rounded-lg hover:bg-teal-500"
    >
      {icon}
      {name}
    </Link>
  );
};

export default ModuleBtn;
