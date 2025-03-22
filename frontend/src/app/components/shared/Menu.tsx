"use client"
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

const Menu = () => {
  const path = usePathname();


  return (
    <nav className="flex gap-6 ">
      <MenuItem href="/" selected={path === "/"}>Home</MenuItem>
      <MenuItem href="/projects/1" selected={path === "/project/1"}>Projetos</MenuItem>
      <MenuItem href="/portfolio" selected={path === "/portfolio"}>Portfolio</MenuItem>
      <MenuItem href="/contact" selected={path === "/contact"}>Contato</MenuItem>
    </nav>
  );
};

export default Menu;
