import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faCode,
  faCircleInfo,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { theme } from "../../tailwind.config";

const items = [
  {
    name: "about",
    icon: faCircleInfo,
    color: theme.colors.Green,
    colorName: "bg-Green",
  },
  {
    name: "skills",
    icon: faCode,
    color: theme.colors.Maroon,
    colorName: "bg-Maroon",
  },
  {
    name: "projects",
    icon: faTools,
    color: theme.colors.Blue,
    colorName: "bg-Blue",
  },
  {
    name: "links",
    icon: faLink,
    color: theme.colors.Lavender,
    colorName: "bg-Lavender",
  },
];

export default function Navigation({ pageFunction }) {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-Surface0 rounded-full drop-shadow-lg w-min mb-12">
      <div className="grid grid-flow-col auto-cols-max p-2.5 gap-2.5">
        {items.map((i, index) => (
          <div
            key={index}
            className={`w-11 h-11 rounded-full cursor-pointer flex justify-center items-center ${
              active === index ? i.colorName : "hover:bg-Surface1"
            }`}
            onClick={() => {
              setActive(index);
              pageFunction(index);
            }}
          >
            <FontAwesomeIcon
              icon={i.icon}
              color={active === index ? theme.colors.Surface0 : i.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
