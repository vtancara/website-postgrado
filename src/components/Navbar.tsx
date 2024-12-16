// Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import {Disclosure, Menu} from "@headlessui/react";
import {useState, useEffect} from "react";
import {ChevronDown} from "lucide-react";

const maestrias = [
    {
        name: "Maestría en Docencia Universitaria",
        href: "/cursos/docencia-universitaria",
    },
    {
        name: "Maestría en Gestión de Tecnologías",
        href: "/cursos/gestion-tecnologias",
    },
    {
        name: "Maestría en Ingeniería de Software",
        href: "/cursos/ingenieria-software",
    },
    {
        name: "Maestría en Seguridad Informática",
        href: "/cursos/seguridad-informatica",
    },
];

export const Navbar = () => {
    const [navbarTop, setNavbarTop] = useState(64);
    const navigation = ["Inicio", "Doctorado", "Trámites", "Sobre nosotros"];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const navigationBarHeight = 64;

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
            style={{top: `${navbarTop}px`}}
        >
            <nav
                className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
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
                    {({open}) => (
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

                            {/* Mobile Menu */}
                            <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                                <Link
                                    href="/"
                                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary-800 focus:text-customBlueBtnLink focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                                >
                                    <div className="font-bold">Inicio</div>
                                </Link>

                                {/* Mobile Maestrías Dropdown */}
                                <div className="w-full">
                                    <Disclosure>
                                        {({open}) => (
                                            <>
                                                <Disclosure.Button
                                                    className="flex justify-between w-full px-4 py-2 -ml-4 text-gray-500 hover:text-primary-800 focus:text-customBlueBtnLink">
                                                    <span className="font-bold">Maestrías</span>
                                                    <ChevronDown
                                                        className={`w-5 h-5 transition-transform ${
                                                            open ? "transform rotate-180" : ""
                                                        }`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-2 pb-2 ml-4 space-y-2">
                                                    {maestrias.map((maestria, index) => (
                                                        <Link
                                                            key={index}
                                                            href={maestria.href}
                                                            className="block py-2 text-sm text-gray-500 hover:text-primary"
                                                        >
                                                            {maestria.name}
                                                        </Link>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>

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
                        <li className="mr-3 nav__item">
                            <Link
                                href="/"
                                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-customBlueBtnLink focus:text-customBlueBtnLink focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                            >
                                Inicio
                            </Link>
                        </li>

                        {/* Desktop Maestrías Dropdown */}
                        <li className="mr-3 nav__item">
                            <Menu as="div" className="relative inline-block text-left">
                                <Menu.Button
                                    className="inline-flex items-center px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-customBlueBtnLink focus:text-customBlueBtnLink focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                                    Maestrías
                                    <ChevronDown className="w-5 h-5 ml-2"/>
                                </Menu.Button>
                                <Menu.Items
                                    className="absolute left-0 w-56 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {maestrias.map((maestria, index) => (
                                            <Menu.Item key={index}>
                                                {({active}) => (
                                                    <Link
                                                        href={maestria.href}
                                                        className={`${
                                                            active ? "bg-gray-100 text-primary" : "text-gray-700"
                                                        } block px-4 py-2 text-sm`}
                                                    >
                                                        {maestria.name}
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Menu>
                        </li>

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
