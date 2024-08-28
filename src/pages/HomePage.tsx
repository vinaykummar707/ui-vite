import {
  ArrowUp,
  ArrowUp2,
  Calendar2,
  Chart,
  Chart2,
  Element3,
  Flash,
  Gameboy,
  Graph,
  MenuBoard,
  Notification,
  Profile2User,
  Setting2,
  ShieldSecurity,
} from "iconsax-react";
import NavItem from "../components/NavItem";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LogoSideBar from "../components/LogoSideBar";

const HomePage = () => {
  const iconSize = 20;
  const location = useLocation();

  const isRouterActive = (path: string) => location.pathname.includes(path);
  const iconVariant = (path: string) =>
    isRouterActive(path) ? "Bulk" : "Linear";

  const iconColor = (path) =>
    isRouterActive(path) ? "text-white" : "text-neutral-900 dark:text-neutral-500";

  const navlinks = [
    {
      label: "Dashboard",
      path: "dashboard",
      icon: (
        <Element3
          variant={iconVariant("/dashboard")}
          className={iconColor("/dashboard")}
          size={iconSize}
        />
      ),
    },
    {
      label: "Running Dialysis",
      path: "activity",
      icon: (
        <Flash
          variant={iconVariant("/activity")}
          className={iconColor("/activity")}
          size={iconSize}
        />
      ),
    },
 
    {
      label: "Technicians",
      path: "technicians",
      icon: (
        <Graph
          variant={iconVariant("technicians")}
          className={iconColor("technicians")}
          size={iconSize}
        />
      ),
    },
    {
      label: "Beds",
      path: "beds",
      icon: (
        <Graph
          variant={iconVariant("beds")}
          className={iconColor("beds")}
          size={iconSize}
        />
      ),
    },
    {
      label: "Patients",
      path: "patients",
      icon: (
        <Profile2User
          variant={iconVariant("/patients")}
          className={iconColor("/patients")}
          size={iconSize}
        />
      ),
    },
    {
      label: "Medical Reports",
      path: "medical-bills",
      icon: (
        <Graph
          variant={iconVariant("medical-bills")}
          className={iconColor("medical-bills")}
          size={iconSize}
        />
      ),
    },
    {
      label: "Dialysis Bills",
      path: "Dialysis-bills",
      icon: (
        <Graph
          variant={iconVariant("Dialysis-bills")}
          className={iconColor("Dialysis-bills")}
          size={iconSize}
        />
      ),
    },

    {
      label: "Summaries",
      path: "summaries",
      icon: (
        <MenuBoard
          variant={iconVariant("summaries")}
          className={iconColor("summaries")}
          size={iconSize}
        />
      ),
    },
    {
      label: "Settings",
      path: "settings",
      icon: (
        <Setting2
          variant={iconVariant("settings")}
          className={iconColor("settings")}
          size={iconSize}
        />
      ),
    },
  ];

  const appearenceLinks = [
    {
      label: "notifications",
      path: "notifications",
      icon: (
        <Notification
          variant={iconVariant("/notifications")}
          className={iconColor("/notifications")}
          size={iconSize}
        />
      ),
    },]

  useEffect(() => {
    console.log(location);
  });
  return (
    <div className="h-screen  w-screen flex flex-col">
      <div className="h-14 border-b dark:bg-neutral-900 dark:border-neutral-800 bg-white"></div>
      <div className="flex-1 flex">
        <div className="px-3 py-4 w-[15%] dark:bg-neutral-900 bg-neutral-10 border-neutral-800 border-r bg-n flex  justify-between flex-col">
          {/* <LogoSideBar /> */}

          <div className="flex gap-2 flex-col">
            <p className="text-neutral-400 uppercase text-xs">menu</p>
            <div className="flex gap- flex-col">
              {navlinks.map((link: any) => (
                <NavItem
                  title={link.label}
                  to={link.path}
                  active={isRouterActive(link.path)}
                  icon={link.icon}
                />
              ))}
            </div>

            <p className="text-neutral-400 uppercase text-xs">Appearence</p>

            <div className="flex gap- flex-col">
              {appearenceLinks.map((link: any) => (
                <NavItem
                  title={link.label}
                  to={link.path}
                  active={isRouterActive(link.path)}
                  icon={link.icon}
                />
              ))}
            </div>

            
          </div>

          <div className="text-sm font-semibold inline-flex items-center justify-between px-3.5 py-2 bg-neutral-10  border rounded-md">
            <div className="flex flex-col">
              <p className="font-semibold text-sm ">Dialysis Unit 1</p>
              <p className=" text-neutral-400 text-xs ">4th Floor - Nampally</p>
            </div>
            <ArrowUp2 className="text-neutral-900" stroke="4" size={16} />
          </div>
        </div>
        <div className="flex-1 flex">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
