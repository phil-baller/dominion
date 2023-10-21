import { useMemo } from "react";

export const navbarRoutes = () => {
  const routes = useMemo(
    () => [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About Us",
        path: "/about",
      },
      {
        name: "What we Do",
        path: "/what-we-do",
      },
      {
        name: "Blog",
        path: "/blog",
      },
      {
        name: "Contact",
        path: "/contact",
      },
    ],
    []
  );

  return routes;
};

export const socialsIcons = () => {
  const socials = useMemo(
    () => [
      {
        name: "facebook",
        icon: "/icons/facebook.svg",
        path: "#",
      },
      {
        name: "Twitter",
        icon: "/icons/twitter.svg",
        path: "#",
      },
      {
        name: "instagram",
        icon: "/icons/instagram.svg",
        path: "#",
      },
      {
        name: "linkedin",
        icon: "/icons/linkedin.svg",
        path: "#",
      },
    ],
    []
  );

  return socials;
};

export const whatWeDo = () => {
  const what = useMemo(
    () => [
      {
        name: "Volunteer",
        icon: "/icons/volunteer.svg",
        text: "Lorem ipsum dolor sit amet consectetur. Arcu in amet etiam pulvinar ullamcorper turpis tortor duis feugiat. Nibh mattis sapien enim a. Sed ac blandit cras in.",
      },
      {
        name: "Donate",
        icon: "/icons/donate.svg",
        text: "Lorem ipsum dolor sit amet consectetur. Arcu in amet etiam pulvinar ullamcorper turpis tortor duis feugiat. Nibh mattis sapien enim a. Sed ac blandit cras in.",
      },
      {
        name: "Fundraise",
        icon: "/icons/fundraise.svg",
        text: "Lorem ipsum dolor sit amet consectetur. Arcu in amet etiam pulvinar ullamcorper turpis tortor duis feugiat. Nibh mattis sapien enim a. Sed ac blandit cras in.",
      },
    ],
    []
  );

  return what;
};
