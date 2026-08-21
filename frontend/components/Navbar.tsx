'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/libs/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
            </Link>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Board Papers">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/courses">AKU</HoveredLink>
                    <HoveredLink href="/courses">Federal</HoveredLink>
                    <HoveredLink href="/courses">KIU</HoveredLink>
               </div>
            </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Universities">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/courses">LUMS</HoveredLink>
                    <HoveredLink href="/courses">AKU</HoveredLink>
                    <HoveredLink href="/courses">IBA</HoveredLink>
                    <HoveredLink href="/courses">GIKI</HoveredLink>
                    <HoveredLink href="/courses">NUST</HoveredLink>
                    <HoveredLink href="/courses">FAST</HoveredLink>
               </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Scholarships">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/courses">NOP</HoveredLink>
                    <HoveredLink href="/courses">NTHP</HoveredLink>
                    <HoveredLink href="/courses">HUTOPS</HoveredLink>
               </div>
            </MenuItem>

                <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar