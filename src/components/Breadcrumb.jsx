import React from "react";
import {
  HiChevronDoubleRight,
  HiChevronRight,
  HiHome,
  HiHomeModern,
  HiMiniHome,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle, links }) => {
  return (
    <div className="w-full gap-3 flex mb-5 ">
      <nav className="flex  text-gray-700 rounded-lg " aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to={"/"}
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-teal-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HiMiniHome className="text-teal-400" />
              Home
            </Link>
          </li>
          {links &&
            links.map((link, index) => (
              <li aria-current="page" key={index}>
                <div className="flex items-center">
                  <HiChevronDoubleRight className="text-teal-500" />
                  <Link to={link.path}>
                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                      {link.title}
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          <li aria-current="page">
            <div className="flex items-center">
              <HiChevronDoubleRight className="text-teal-500" />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
