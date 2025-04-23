import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export default function AppNavbar() {
  const location = useLocation();
  const navLinks = [
    { name: "Table", href: "/table" },
    { name: "List", href: "/list" },
  ];

  return (
    <Navbar
      maxWidth="full"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand className="text-red-800">
        <div className="flex items-center gap-2">
          <p className="flex text-lg flex-row font-bold md:text-xl">
            <span className="flex flex-col text-primary">
              <span className="flex justify-center">Meme</span>¯\_(ツ)_/¯
            </span>{" "}
            Guide
          </p>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {navLinks.map((link) => (
          <NavbarItem
            key={link.name}
            isActive={
              location.pathname === link.href ||
              (link.href === "/table" && location.pathname === "/")
            }
          >
            <Link
              as={NavLink}
              to={link.href}
              color={
                location.pathname === link.href ||
                (link.href === "/table" && location.pathname === "/")
                  ? "primary"
                  : "foreground"
              }
              className={
                location.pathname === link.href ||
                (link.href === "/table" && location.pathname === "/")
                  ? "font-bold"
                  : ""
              }
              end
            >
              Table{link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
