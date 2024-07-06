import Link from "next/link";
import React, { useEffect } from "react";
import { AiFillProduct } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <AiFillProduct fontSize="30px" />
          <p className="nav-logo" data-aos="fade-left">
            Product<span className="text-primary"> Explorer</span>
          </p>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
