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
export const whatWeTrain = () => {
  const what = useMemo(
    () => [
      {
        name: "Training for Mechanics",
        icon: "/icons/mechanic.svg",
      },
      {
        name: "Training for Builders",
        icon: "/icons/builders.svg",
      },
      {
        name: "Training for Agriculture",
        icon: "/icons/agriculture.svg",
      },
    ],
    []
  );

  return what;
};

export const Impacts = () => {
  const what = useMemo(
    () => [
      {
        name: "Amount Raised",
        icon: "/icons/ifund.svg",
        number: 2.5,
      },
      {
        name: "People helped",
        icon: "/icons/ipeople.svg",
        number: 500,
      },
      {
        name: "Volunteer",
        icon: "/icons/ivol.svg",
        number: 30,
      },
    ],
    []
  );

  return what;
};

export const partners = () => {
  const what = useMemo(
    () => [
      {
        name: "Blessing Solidarity Home Foundation (BSHF)",
        location: "Bamenda, NW Region Cameroon, Africa",
        contact: ["Mrs. Ahone Florence", "Tel: +237 677 029 767 "],
      },
      {
        name: "Rainbow Orphanage",
        location: "Lala Road, Mamfe SouthWest Region, Cameroon, Africa",
        contact: [
          "Mrs. Ahone Florence",
          "Tel: +237 677 029 767 ",
          " Email: ahoneflorence1@gmail.com",
        ],
      },
      {
        name: "St. Therese Orphanage",
        location: "Yaounde, Center Region Cameroon, Africa",
        contact: [
          "Mrs. Ahone Florence",
          "Tel: +237 677 029 767 ",
          " Email: ahoneflorence1@gmail.com",
        ],
      },
      {
        name: "Shaping Destiny Orphanage",
        location: "Yaounde, Center Region Cameroon, Africa",
        contact: [
          "Mrs. Ahone Florence",
          "Tel: +237 677 029 767 ",
          " Email: ahoneflorence1@gmail.com",
        ],
      },
    ],
    []
  );

  return what;
};
