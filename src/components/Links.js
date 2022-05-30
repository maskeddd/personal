import Window from "./Window";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faGithub,
  faSteam,
  faEthereum,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { theme } from "../../tailwind.config";

const links = [
  {
    label: "mskd.eth#0959",
    url: "https://discord.com/users/717991713695858719",
    icon: faDiscord,
    color: theme.colors.Blue,
  },
  {
    label: "masked_eth",
    url: "https://twitter.com/masked_eth",
    icon: faTwitter,
    color: theme.colors.Sapphire,
  },
  { label: "maskeddd", url: "https://github.com/maskeddd", icon: faGithub },
  {
    label: "masked",
    url: "https://steamcommunity.com/id/maskedd",
    icon: faSteam,
  },
  {
    label: "- Masked -",
    url: "https://osu.ppy.sh/users/11517157",
    altIcon: "/osu.svg",
  },
  {
    label: "mskd.eth",
    url: "https://etherscan.io/address/0x43960ddf529842f723e95aef082e75eaac4c3383",
    icon: faEthereum,
    color: theme.colors.Lavender,
  },
  {
    label: "masked",
    url: "https://www.youtube.com/channel/UCrPN1rm3ouCb8s250P1UXHg",
    icon: faYoutube,
    color: theme.colors.Red,
  },
];

export default function Links() {
  return (
    <Window
      title="Links"
      content={
        <div className="flex flex-wrap gap-2">
          {links.map((i, index) => (
            <a
              key={index}
              href={i.url}
              rel="noreferrer"
              target="_blank"
              className="bg-Surface1 p-4 rounded-lg cursor-pointer hover:bg-Surface2 flex flex-row items-center flex-grow"
            >
              {i.altIcon ? (
                <div className="mr-2 flex items-center">
                  <Image
                    src={i.altIcon}
                    alt="me"
                    color="white"
                    width="24"
                    height="24"
                  />
                </div>
              ) : (
                <FontAwesomeIcon
                  size="lg"
                  fixedWidth
                  className="mr-2"
                  icon={i.icon}
                  color={i.color || theme.colors.text}
                />
              )}

              {i.label}
            </a>
          ))}
        </div>
      }
    />
  );
}
