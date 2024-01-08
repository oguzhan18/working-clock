import { FaFreeCodeCamp, FaFigma } from "react-icons/fa";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

type socialLinkType = {
  title: string;
  url: string;
  icon: React.JSX.Element;
}[];

const socialLink: socialLinkType = [
  {
    title: "Twitter",
    url: "https://twitter.com/oguzhancarts",
    icon: <BsTwitter />,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/baliram-singh",
    icon: <BsLinkedin />,
  },
  {
    title: "Freecodecamp",
    url: "https://freecodecamp.com/ome9a",
    icon: <FaFreeCodeCamp />,
  },
  {
    title: "Figma",
    url: "https://www.figma.com/@ome9a",
    icon: <FaFigma />,
  },
];

export { socialLink };
export type { socialLinkType };
