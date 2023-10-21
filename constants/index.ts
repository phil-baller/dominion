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
