import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { NavLink, useLocation } from "react-router-dom";

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Table", href: "/table" },
    { name: "List", href: "/list" },
  ];

  return (
    <Navbar
      maxWidth="full"
      isBordered
      isBlurred
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Brand & Logo*/}
      <NavbarBrand>
        <div className="flex items-center gap-2">
          <span className="text-xl text-primary">¯\_(ツ)_/¯</span>
          <p className="text-lg font-bold md:text-xl">
            <span className="text-primary">Meme</span> Guide
          </p>
        </div>
      </NavbarBrand>

      {/* Desktop menu - visibile on screens >= md  */}
      <NavbarContent className="hidden md:flex gap-6" justify="center">
        {navLinks.map((link) => (
          <NavbarItem
            key={link.href}
            isActive={location.pathname === link.href}
          >
            <Link
              as={NavLink}
              to={link.href}
              color="foreground"
              className="hover:text-primary transition-colors"
              end
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Button mobile menu - visibile on screens <= md   */}
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="
            w-12 h-12           
            flex items-center    
            justify-center
            -mr-2               
            hover:bg-default-100
            rounded-full        
            transition-all            
          "
        />
      </NavbarContent>

      {/* Mobile dropdown menu */}
      <NavbarMenu className="!left-auto !right-0 !w-auto !h-[fit-content] max-h-[60vh] min-w-[200px] py-2 overflow-y-auto shadow-lg">
        <div className="w-full h-auto flex flex-col items-end pr-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <NavbarMenuItem
              key={link.href}
              isActive={location.pathname === link.href}
              className="w-full flex justify-end"
            >
              <Link
                as={NavLink}
                to={link.href}
                size="lg"
                className="text-right w-full px-4 py-3 hover:bg-default-100 rounded-lg transition-colors"
                end
                onPress={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default AppNavbar;
