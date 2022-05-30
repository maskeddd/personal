import Window from "./Window";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <Window
      title="Projects"
      content={
        <div className="flex flex-col gap-4">
          <a
            href="https://osscord.xyz"
            target="_blank"
            className="bg-Surface1 p-4 rounded-lg flex flex-row hover:bg-Surface2"
          >
            <div className="mr-4 flex items-center">
              <Image src="/osscord.svg" width={48} height={48} />
            </div>
            <div className="flex flex-col max-w-sm">
              <div className="flex flex-row items-center gap-2">
                osscord <FontAwesomeIcon title="JavaScript" icon={faJs} />
              </div>
              <p className="text-Subtext0 text-sm">
                an easy-to-use, feature-rich osu! bot for discord
              </p>
            </div>
          </a>
          <a
            href="#"
            className="bg-Surface1 p-4 rounded-lg flex flex-row hover:bg-Surface2"
          >
            <div className="flex flex-col max-w-sm">
              <div className="flex flex-row items-center gap-2">
                This Website
                <FontAwesomeIcon title="JavaScript" icon={faJs} />
              </div>
              <p className="text-Subtext0 text-sm">
                The website that you are on right now. Crazy.
              </p>
            </div>
          </a>
        </div>
      }
    />
  );
}
