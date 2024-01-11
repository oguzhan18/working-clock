import { socialLink } from "@/src/data/social";

import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="relative z-10">
      <ul className="p-1 flex items-center w-fit rounded-full mx-auto mb-10 gap-2 bg-gray-900 shadow-xl shadow-gray-700/50">
        {socialLink.map((item) => (
          <li
            key={item.title}
            className="p-3 aspect-square bg-gray-800 rounded-full border-2 border-transparent hover:border-gray-500 hover:bg-gray-700"
          >
            <Link
              href={item.url}
              title={item.title}
              className="text-xl"
              target="_blank"
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
