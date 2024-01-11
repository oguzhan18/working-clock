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
    </nav>
  );
}

export default Nav;
