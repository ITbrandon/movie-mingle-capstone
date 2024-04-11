import React from 'react'
import Button from './Button';
const Mingle = () => {
  const mingleLinks = [
    {
      title: "Feed",
      href: "/mingle/feed",
    },

    {
      title: "My Posts",
      href: "/mingle/myposts",
    },

    {
      title: "Create Post",
      href: "/mingle/create",
    },
  ];
  return (
    <>
      <nav>
        <ul className="flex justify-evenly items-center text-white bg-orange-600">
          {mingleLinks.map((link, index) => (
            <li className="bg-orange-600 p-4 rounded-lg" key={index}>
              <a className="hover:opacity-60 duration-300" href={link.href}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Mingle
