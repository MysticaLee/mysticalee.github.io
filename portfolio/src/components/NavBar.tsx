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
    <div className="shadow-custom-white fixed left-0 top-0 w-full shadow-sm">
      <div className="bg-custom-black items-center justify-between px-4 py-4 md:flex">
        <div className="text-custom-white mx-4 flex cursor-pointer items-center font-[Poppins] text-2xl font-bold">
          <IconNorthStar />
          <span className="mx-2">JL</span>
        </div>
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
            className={`bg-custom-black absolute left-0 z-[-1] w-full transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:border-0 md:pl-0 md:shadow-none ${
              menuOpen
                ? "border-custom-white shadow-custom-white top-16 border-t-2 shadow-sm"
                : "top-[-490px]"
            }`}
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="hover:text-custom-secondary border-custom-secondary text-custom-white mx-4 my-5 cursor-pointer text-center text-xl md:my-0 md:px-3 md:hover:border-b-2"
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
