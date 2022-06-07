import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faCode,
  faCircleInfo,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { theme } from "../../tailwind.config";

const items = [
  {
    name: "about",
    icon: faCircleInfo,
    color: theme.colors.colors.Blue,
    colorName: "bg-colors-Blue",
  },
  {
    name: "skills",
    icon: faCode,
    color: theme.colors.colors.Maroon,
    colorName: "bg-colors-Maroon",
  },
  {
    name: "projects",
    icon: faTools,
    color: theme.colors.colors.Blue,
    colorName: "bg-colors-Blue",
  },
  {
    name: "links",
    icon: faLink,
    color: theme.colors.colors.Lavender,
    colorName: "bg-colors-Lavender",
  },
  {
    name: "spotify",
    icon: faSpotify,
    color: theme.colors.colors.Green,
    colorName: "bg-colors-Green",
  },
];

export default function Navigation({ page, setPage, controls }) {
  const [active, setActive] = useState(0),
    [animating, setAnimating] = useState(false);

  return (
    <div className="bg-Surface0 rounded-full drop-shadow-lg w-min">
      <div className="grid grid-flow-col auto-cols-max p-2.5 gap-2.5">
        {items.map((i, index) => (
          <div
            key={index}
            className={`w-11 h-11 rounded-full cursor-pointer flex justify-center items-center ${
              index === active ? i.colorName : "hover:bg-Surface1"
            }`}
            onClick={async () => {
              if (animating) return;

              setActive(index);

              const variant = index > page ? "exit" : "enter";

              if ((page !== 0 || index !== 0) && index !== page) {
                setAnimating(true);
                await controls.start(variant);  
                await controls.start(variant === "exit" ? "enter" : "exit");
                setPage(index);
                await controls.start("center");
                setAnimating(false);
              }
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
