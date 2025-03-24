// This file contains the NavBar component which is the top navigation bar of the application.

import React from "react";
import {
  Navbar,
  NavbarBrand,
  Avatar,
  NavbarContent,
  NavbarItem,
  DropdownTrigger,
  Link,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { GiElectric } from "react-icons/gi";

export const NavBar = () => {
  return (
    <Navbar className="flex items-center justify-between bg-gray-800">
      <div className="flex items-center">
        <GiElectric className="mr-2 text-white" />
        <NavbarBrand>
          <p className="font-bold text-inherit text-white">
            TwinStruct - Digital Twin Building
          </p>
        </NavbarBrand>
      </div>

      <NavbarContent className="hidden flex-grow justify-center gap-4 sm:flex">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Configurations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            AI Assistant
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex items-center justify-end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold text-white">Signed in as</p>
              <p className="font-semibold text-white">farida.oweid@gmail.com</p>
            </DropdownItem>
            <DropdownItem className="text-white" key="settings">
              Analytics
            </DropdownItem>
            <DropdownItem className="text-white" key="team_settings">
              Assets Overview
            </DropdownItem>
            <DropdownItem className="text-white" key="help_and_feedback">
              Help & Feedback
            </DropdownItem>
            <DropdownItem className="text-white" key="system">
              My account
            </DropdownItem>

            <DropdownItem className="text-white" key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
