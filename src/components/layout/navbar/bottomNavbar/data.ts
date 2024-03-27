import { navListMenuItems } from "../data";
import downArrow from "../../../../../public/assets/navabar/Arrow_Down_Black.svg";

export const menuItems = [
  {
    leftIcon: undefined,
    text: "Home",
    bg: "#ffffff",
    textColor: "#0F0F0F",
    id: "home_btn",
    link: "/",
  },

  {
    id: "services_btn",
    text: "Services",
    bg: "#ffffff",
    textColor: "#0F0F0F",
    rightIcon: downArrow,

    children: [
      ...(navListMenuItems?.length ? navListMenuItems : []).map((item) => {
        return {
          text: item.title,
          link: item.url,
          icon: item.icon,
          description: item.description,
        };
      }),
    ],
  },

  {
    leftIcon: undefined,
    text: "About Us",
    bg: "#ffffff",
    textColor: "#0F0F0F",
    id: "about_us_btn",
    link: "/about",
    hideInSmallScreen: true,
  },

  {
    leftIcon: undefined,
    text: "Gallery",
    bg: "#ffffff",
    textColor: "#0F0F0F",
    id: "gallery_btn",
    link: "/gallery",
    hideInSmallScreen: true,
  },

  {
    rightIcon: "/assets/icons/message_white.svg",
    id: "book_now_btm",
    text: "Contact",
    bg: "#2A317F",
    textColor: "#ffffff",
    link: "/contact-us",
  },
];
