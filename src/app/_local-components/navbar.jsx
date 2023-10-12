"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, MenuMD } from "./menu";






const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="flex justify-between p-5 relative">
      <div className="ml-2 md:ml-20"><img src="logo.png" alt="oceandb-logo" /></div>

      <div className="md:mr-20 relative">
        <div className="hidden md:flex"><MenuMD /></div>
        <div className="flex md:hidden"><Menu /></div>
      </div>
      
    </div>
  );
};

export default Navbar;
