import { useState } from 'react';

import { IconMenu2, IconX } from '@tabler/icons-react';

import ThemeButton from './ThemeButton';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Education",
      href: "#education",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="fixed left-0 top-0 z-10 w-full shadow-sm shadow-custom-black dark:shadow-custom-white">
      <div className="items-center justify-between bg-custom-white px-4 py-4 dark:bg-custom-black md:flex">
        <div className="mx-4 flex">
          <ThemeButton />
          <a
            href="#"
            className="flex-grow cursor-pointer text-left font-[Poppins] text-2xl font-bold"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <span className="mx-2">JL</span>
          </a>
        </div>
        <div
          className="absolute right-6 top-4 cursor-pointer md:hidden"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <IconX size={32} stroke={3} />
          ) : (
            <IconMenu2 size={32} stroke={3} />
          )}
        </div>
        <div className="flex md:justify-center">
          <ul
            className={`absolute left-0 z-[-1] w-full bg-custom-white transition-all duration-500 ease-in dark:bg-custom-black md:static md:z-auto md:flex md:w-auto md:items-center md:border-0 md:pl-0 md:shadow-none md:duration-0 ${
              menuOpen
                ? "top-16 border-t-2 border-custom-black shadow-sm shadow-custom-black dark:border-custom-white dark:shadow-custom-white"
                : "top-[-490px]"
            }`}
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="border-custom-hover hover:text-custom-hover mx-4 my-5 text-center text-xl md:my-0 md:hover:border-b-2"
              >
                <a
                  className="flex flex-grow items-center justify-center"
                  href={link.href}
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
