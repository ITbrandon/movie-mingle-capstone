import React from 'react'
import Logout from './Logout'
const Navbar = () => {
const navLinks = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Gallery",
    href: "/gallery",
  },

  {
    title: "Mingle",
    href: "/mingle",
  },
];
  return (
    <nav className="bg-[rgba(0, 0, 0, 0.95)] p-4">
      <ul className="flex justify-evenly items-center text-orange-600">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a className='hover:opacity-60 duration-300' href={link.href}>{link.title}</a>
          </li>
        ))}
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
