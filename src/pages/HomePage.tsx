import {
  ArrowUp,
  ArrowUp2,
  Calendar2,
  Chart,
  Chart2,
  Driver,
  Element3,
  Flash,
  Gameboy,
  Graph,
  Health,
  MenuBoard,
  Moon,
  Note,
  Notification,
  Printer,
  Profile2User,
  Save2,
  SecurityUser,
  Setting,
  Setting2,
  ShieldSecurity,
} from "iconsax-react";
import NavItem from "../components/NavItem";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LogoSideBar from "../components/LogoSideBar";

const HomePage = () => {
  const iconSize = 18;
  const location = useLocation();

  const isRouterActive = (path: string) => location.pathname.includes(path);
  const iconVariant = (path: string) =>
    isRouterActive(path) ? "Bold" : "Linear";

  const iconColor = (path) =>
    isRouterActive(path)
      ? "text-white"
      : "text-neutral-900 dark:text-neutral-400";

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
        <SecurityUser
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
        <Note
          variant={iconVariant("medical-bills")}
          className={iconColor("medical-bills")}
          size={iconSize}
        />
      ),
    },
    {
      label: "Dialysis Receipts",
      path: "Dialysis-bills",
      icon: (
        <Driver
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
        <Save2
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
    },
  ];

  useEffect(() => {
    console.log(location);
  });
  return (
    <div className="h-screen  w-screen flex flex-col">
      <div className="h-10 border-b px-4 inline-flex items-center justify-center  dark:border-neutral-700 bg-lime-400 dark:bg-lime-400">
        <p className="text-xs font-semibold tracking-wide text-neutral-900">
          New Version 2.14 is released. Please do a ctrl+shift+r to get new
          features
        </p>
      </div>
      <div className="h-14 border-b px-4 inline-flex items-center justify-between dark:bg-neutral-800 dark:border-neutral-700 bg-white">
        <div className="inline-flex items-center gap-2">
          <div className="size-7 bg-lime-400 rounded-lg"></div>
          <h1 className="font-extrabold dark:text-white text-lgxxxx ">Nephbuddy</h1>
        </div>

        <div className="inline-flex items-center gap-2">
          {/* <Moon variant="Linear" size={24} className="text-neutral-900" /> */}
          <div className="size-9 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="px-3 py-4 w-[15%]  dark:bg-neutral-800 bg-neutral-10 dark:border-neutral-700 border-r bg-n flex  justify-between flex-col">
          {/* <LogoSideBar /> */}

          <div className="flex gap-3 flex-col">
            <p className="text-neutral-400 dark:text-neutral-400 capitalize text-sm">
              menu
            </p>
            <div className="flex gap-0.5 flex-col">
              {navlinks.map((link: any) => (
                <NavItem
                  title={link.label}
                  to={link.path}
                  active={isRouterActive(link.path)}
                  icon={link.icon}
                />
              ))}
            </div>

            <p className="text-neutral-400 dark:text-neutral-400 capitalize text-sm">
              Appearence
            </p>

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

          <div className="text-sm font-semibold inline-flex items-center justify-between px-3.5 py-2 bg-neutral-10 dark:border-neutral-700  border rounded-md">
            <div className="flex space-y-0.5 flex-col">
              <p className="font-semibold dark:text-white text-sm ">
                Dialysis Unit 1
              </p>
              <p className=" text-neutral-400 dark:text-neutral-500 text-xs ">
                4th Floor - Nampally
              </p>
            </div>
            <ArrowUp2
              className="text-neutral-900 dark:text-white"
              stroke="4"
              size={18}
            />
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
