import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { useLocation } from "react-router-dom";

export default function AppNavbar() {
  const { pathname } = useLocation();
  const navLinks = [
    { name: "Таблиця", href: "/table" },
    { name: "Список", href: "/list" },
  ];

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Meme Guide</p>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.name} isActive={pathname === link.href}>
            <Link
              href={link.href}
              color={pathname === link.href ? "primary" : "foreground"}
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
