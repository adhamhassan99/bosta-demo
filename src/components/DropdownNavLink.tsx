import { useState } from "react";
import DropdownItem from "./DropdownItem";
import ArrowDown from "../assets/arrowDown.svg";

type Props = {
  title: string;
  subItems?: string[];
};

const DropdownNavLink = (props: Props) => {
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <div className="relative mx-3">
      <div
        className="flex items-center px-4"
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
      >
        <span
          className={`font-medium ${
            mouseIn ? "text-red-600" : ""
          } flex gap-1 group`}
        >
          {props.title}
          <img
            className="scale-[70%] group-hover:-rotate-90 transition-transform"
            src={ArrowDown}
            alt=""
          />
        </span>
      </div>
      <div
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
        className={`transition-all duration-500  bg-white px-2 py-2 absolute w-full shadow-md rounded-md ${
          mouseIn ? "visible opacity-100" : "hidden opacity-0"
        }`}
      >
        <div className="flex flex-col items-center">
          {props.subItems?.map((item) => (
            <DropdownItem title={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownNavLink;
