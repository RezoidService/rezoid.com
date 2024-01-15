
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

import RezoidLogo from "./assets/images/RezoidLogo.svg"

import MKTypography from "components/MKTypography";



const date = new Date().getFullYear();

export default {
  brand: {
    name: "Rezoid Services",
    image: RezoidLogo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <GitHubIcon />,
      link: "",
    },
    {
      icon: <YouTubeIcon />,
      link: "",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "" },
        { name: "freebies", href: "" },
        { name: "premium tools", href: "" },
      ],
    },

    {
      name: "help & support",
      items: [
        { name: "contact us", href: "" },
        { name: "knowledge center", href: "" },
        { name: "custom development", href: "" },
        { name: "sponsorships", href: "" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "" },
        { name: "privacy policy", href: "" },
        { name: "licenses (EULA)", href: "" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        href=""
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Rezoid Services
      </MKTypography>
      .
    </MKTypography>
  ),
};
