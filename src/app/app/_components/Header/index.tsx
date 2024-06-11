"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useSidebar } from "../Sidebar/ClientSideProvider";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { UserDropDown } from "../user-dropdown";
import { Session } from "next-auth";
import { IoSearchOutline } from "react-icons/io5";

type DashboardHeaderProps = {
  user: Session['user']
}

export function Header({ user }: DashboardHeaderProps) {
  const { toggleSidebar, setSidebarOpen } = useSidebar();

  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-200 dark:bg-gray-800/40 px-6 ">
      <Link href="#" className="lg:hidden" prefetch={false}>
        <span className="sr-only">Home</span>
      </Link>

      <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial w-full  flex justify-end gap-4 mr-4">
          <div className="flex">
            <button
              aria-controls="sidebar"
              className="block lg:hidden"
              onClick={toggleSidebar}
            >
              <HamburgerMenuIcon className=' w-8 h-8'/>
            </button>
          </div>
          <div className="relative">
            <IoSearchOutline className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"/>
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
            />
          </div>


        </form>
        <UserDropDown user={user}/>
      </div>
    </header>
  );
};
