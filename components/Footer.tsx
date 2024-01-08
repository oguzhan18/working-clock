import { socialLink } from "@/src/data/social";

import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="relative z-10">
      <ul className="p-1 flex items-center w-fit rounded-full mx-auto mb-10 gap-2 bg-yellow-800 shadow-xl shadow-yellow-700/50">
        {socialLink.map((item) => (
          <li
            key={item.title}
            className="p-3 aspect-square bg-yellow-800 rounded-full border-2 border-transparent hover:border-yellow-500 hover:bg-yellow-700"
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

      <p className="text-center py-2 font-light text-sm">
        Designed and developed by{" "}
        <strong className="text-yellow-500">Working Clock</strong>
        <Link href={"https://oguzhancart.dev/"}> (OguzhanCart)</Link>
      </p>
    </footer>
  );
}

export default Footer;
