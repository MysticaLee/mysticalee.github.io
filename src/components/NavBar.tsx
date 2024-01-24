import { useState } from 'react';

import { IconMenu2, IconNorthStar, IconX } from '@tabler/icons-react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#about",
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
    <div className="fixed left-0 top-0 w-full shadow-sm shadow-custom-white">
      <div className="items-center justify-between bg-custom-black px-4 py-4 md:flex">
        <a
          href="#"
          className="mx-4 flex cursor-pointer items-center font-[Poppins] text-2xl font-bold text-custom-white"
        >
          <IconNorthStar />
          <span className="mx-2">JL</span>
        </a>
        <div
          className="absolute right-6 top-4 cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IconX size={32} stroke={3} className="text-custom-white" />
          ) : (
            <IconMenu2 size={32} stroke={3} className="text-custom-white" />
          )}
        </div>
        <div className="flex md:justify-center">
          <ul
            className={`absolute left-0 z-[-1] w-full bg-custom-black transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:border-0 md:pl-0 md:shadow-none ${
              menuOpen
                ? "top-16 border-t-2 border-custom-white shadow-sm shadow-custom-white"
                : "top-[-490px]"
            }`}
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="mx-4 my-5 cursor-pointer border-custom-secondary text-center text-xl text-custom-white hover:text-custom-secondary md:my-0 md:px-3 md:hover:border-b-2"
              >
                <a
                  className="sm:px-32 md:px-0"
                  href={link.href}
                  onClick={() => setMenuOpen(!menuOpen)}
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
