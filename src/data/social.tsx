import { FaFreeCodeCamp, FaFigma, FaCodepen } from "react-icons/fa";
import { BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

type socialLinkType = {
  title: string;
  url: string;
  icon: React.JSX.Element;
}[];

const socialLink: socialLinkType = [
  {
    title: "Twitter",
    url: "https://www.instagram.com/oguzhan_cart",
    icon: <BsInstagram />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/o%C4%9Fuzhan-%C3%A7art-b73405199/",
    icon: <BsLinkedin />,
  },
  {
    title: "Codepen",
    url: "https://codepen.io/oguzhan1881",
    icon: <FaCodepen />,
  },
];

export { socialLink };
export type { socialLinkType };
