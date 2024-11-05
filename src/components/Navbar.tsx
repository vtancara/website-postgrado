// Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [navbarTop, setNavbarTop] = useState(64); // Altura inicial del NavigationBar
  const navigation = ["Inicio", "Mastrías", "Doctorado", "Tramites", "Sobre nosotros"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navigationBarHeight = 64; // Ajusta esto al alto real de tu NavigationBar

      if (scrollY > navigationBarHeight) {
        setNavbarTop(0);
      } else {
        setNavbarTop(navigationBarHeight - scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div
          className="w-full fixed left-0 right-0 z-40 bg-white shadow-md transition-all duration-300"
          style={{ top: `${navbarTop}px` }}
      >
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
          {/* Logo */}
          <Link href="/">
          <span className="flex items-center space-x-2">
            <Image
                src="/img/umsa-logo.png"
                width="35"
                height="35"
                alt="Postgrado en Informática"
            />
            <span></span>
            <Image
                src="/img/logo.svg"
                width="200"
                height="200"
                alt="Postgrado en Informática"
            />
          </span>
          </Link>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-customBlueBtnLink focus:text-customBlueBtnLink focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary-800 focus:text-customBlueBtnLink focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                  >
                    <div className="font-bold">{item}</div>
                  </Link>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-customBlueBtnLink focus:text-customBlueBtnLink focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
