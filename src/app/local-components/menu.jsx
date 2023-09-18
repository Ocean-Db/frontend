import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import { HiMenuAlt4 } from "react-icons/hi";

const menuData = ["Home", "How to use", "About", "Login/signup", "Contact"];

export const MenuMD = () => {
  return (
    <div>
      <ul className="flex relative">
        {menuData.map((item) => (
          <div key={item} className="px-4 hover:bg-white hover:py-1 hover:rounded-[5px]">
            <Link
              className="   text-blue-500 text-sm"
              href="#"
            >
              {item}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export const Menu = () => {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <h1>
            <HiMenuAlt4 size={32} />
          </h1>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white w-[250px] text-blue-500">
          {menuData.map((item) => (
            <DropdownMenuItem key={item} className="p-5 text-center hover:bg-slate-100">{item}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
