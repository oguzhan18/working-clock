import { BsGithub } from "react-icons/bs";

import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="flex items-center justify-between gap-2 p-3 sm:p-5 fixed top-0 z-20 w-full backdrop-blur-sm">
      <h1>
        <Link href={"/"} className={`text-2xl font-[500]`}>
          Working Clock
        </Link>
      </h1>
      <Link
        href={"https://github.com/0me9a/fcc-clock"}
        className="border-2 border-transparent p-[4px] sm:p-2 px-3 sm:px-5 rounded-xl bg-yellow-800 hover:border-yellow-950 shadow-lg shadow-yellow-700/50 flex items-center gap-3"
      >
        <BsGithub />
        GitHub
      </Link>
    </nav>
  );
}

export default Nav;
