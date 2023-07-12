import ApplicationLogo from "@/components/application-logo";
import NavLink from "@/components/nav-link";
import { PageProps } from "@/types";
import { router, usePage } from "@inertiajs/react";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconChevronDown } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
    const { auth } = usePage<PageProps>().props;
    return (
        <nav className="px-4 py-2 sm:py-3 sm:px-6 border-b border-border/60">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <ApplicationLogo className="w-auto h-8 mr-4 fill-foreground" />
                    <NavLink href={route("home")} active={route().current("home")}>
                        Home
                    </NavLink>
                    <NavLink href={route("dashboard")} active={route().current("dashboard")}>
                        Dashboard
                    </NavLink>
                </div>
                <div className="flex items-center gap-x-4">
                    <ThemeToggle />

                    {auth.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center justify-between focus:outline-none gap-x-4">
                                {auth.user.name}
                                <IconChevronDown className="w-4 h-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mr-6 w-72">
                                <DropdownMenuLabel>Manage Account</DropdownMenuLabel>
                                <DropdownMenuItem onClick={() => router.get("dashboard")}>
                                    Dashboard
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => router.get("profile.edit")}>
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => router.post("logout")}>
                                    Log Out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <>
                            <NavLink href={route("login")}>Login</NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
