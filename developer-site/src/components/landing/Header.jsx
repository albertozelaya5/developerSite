import { MdOutlineWbSunny, MdNightsStay } from "react-icons/md";
import { useTheme } from "@/hooks";
import { DialogButton, DrawerButton } from ".";
import { Banhcafe } from "../svgs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { useAuth } from "@/hooks/useAuth";
export const Header = () => {
  const { theme, handleThemeToggler } = useTheme();
  const { status, user } = useAuth();

  const [button, setButton] = useState(true);

  const isDarkMode = theme === "dark";

  return (
    <div className="header" id="header">
      <header className="flex w-full z-50 shadow-lg items-center justify-between py-2 px-4 top-0 left-0 bg-background/40 backdrop-blur-md fixed">
        <Link to={`/`}>
          <Banhcafe width="150px" height="40px" />
        </Link>

        <div className="flex items-center gap-x-5 capitalize">
          <div className="flex items-center items -me-2 lg:me-2">
            <ul className="hidden md:flex gap-x-6 md:mx-auto">
              <Link to={`/apis`}>
                <li className="hover:text-RED_LIGHT transition ease-in duration-150">APIs</li>
              </Link>
              <Link to={`/solutions`}>
                <li className="hover:text-RED_LIGHT transition ease-in duration-150">Soluciones</li>
              </Link>
              <Link to={`/aboutus`}>
                <li className="hover:text-RED_LIGHT transition ease-in duration-150">nosotros</li>
              </Link>
              <Link to={`/contactus`}>
                <li className="hover:text-RED_LIGHT transition ease-in duration-150">Contáctanos</li>
              </Link>
            </ul>
          </div>
          <div>
            {button ? (
              <IoMdMenu
                onClick={() => {
                  setButton(!button);
                }}
                className="w-[30px] h-[30px] object-contain hover:cursor-pointer md:hidden"
              />
            ) : (
              <GrClose
                onClick={() => {
                  setButton(!button);
                }}
                className="w-[30px] h-[30px] object-contain hover:cursor-pointer md:hidden"
              />
            )}
          </div>
          {isDarkMode ? (
            <MdNightsStay
              size={25}
              className="cursor-pointer duration-300 hover:text-[#BA0C2F]"
              onClick={handleThemeToggler}
              title="Cambiar a modo claro"
            />
          ) : (
            <MdOutlineWbSunny
              size={25}
              className="text-gray-700 cursor-pointer duration-300 hover:text-[#A32035]"
              onClick={handleThemeToggler}
              title="Cambiar a modo oscuro"
            />
          )}

          <div className="">
            <DrawerButton user={user}/>
          </div>
          <div className="hidden md:block">
            <DialogButton />
          </div>
        </div>
      </header>
      <ul
        className={
          !button
            ? "md:hidden fixed bg-white text-gray-800 z-40 w-full px-8  py-2 font-semibold text-lg capitalize pt-16"
            : "hidden"
        }
      >
        <Link to={`/apis`}>
          <li
            onClick={() => {
              setButton(!button);
            }}
            className="hover:text-RED_LIGHT transition ease-in duration-150"
          >
            APIs
          </li>
        </Link>
        <Link to={`/solutions`}>
          <li
            onClick={() => {
              setButton(!button);
            }}
            className="hover:text-RED_LIGHT transition ease-in duration-150"
          >
            Soluciones
          </li>
        </Link>
        <Link to={`/aboutus`}>
          <li
            onClick={() => {
              setButton(!button);
            }}
            className="hover:text-RED_LIGHT transition ease-in duration-150"
          >
            nosotros
          </li>
        </Link>
        <Link to={`/contactus`}>
          <li
            onClick={() => {
              setButton(!button);
            }}
            className="hover:text-RED_LIGHT transition ease-in duration-150"
          >
            Contáctanos
          </li>
        </Link>
      </ul>
    </div>
  );
};
