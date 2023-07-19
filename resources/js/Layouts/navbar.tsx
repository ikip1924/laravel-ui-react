import ApplicationLogo from "@/components/application-logo";
import NavLink from "@/components/nav-link";
import { CommandPaletteState, PageProps } from "@/types";
import { Link, router, usePage } from "@inertiajs/react";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconChevronDown, IconCommand, IconSearch } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandPalette } from '@/layouts/command-palette';
import { Button } from "@/components/ui/button";



export default function Navbar({
    openCommandPalette,
    setOpenCommandPalette
}: CommandPaletteState) {
    const { auth } = usePage<PageProps>().props;
    return (
        <>
            <CommandPalette openCommandPalette={openCommandPalette} setOpenCommandPalette={setOpenCommandPalette} />
            <nav className="hidden lg:block px-4 py-2 sm:py-3 sm:px-6 border-b border-border/60">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/">
                            <ApplicationLogo className="w-auto h-8 mr-4 fill-foreground" />
                        </Link>

                        <NavLink href={route("home")} active={route().current("home")}>
                            Home
                        </NavLink>
                        <NavLink href={route("dashboard")} active={route().current("dashboard")}>
                            Dashboard
                        </NavLink>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <button onClick={() => setOpenCommandPalette(true)} className=" ring-1 fing-border px-4 py-2 rounded-lg focus:outline-none flex items-center gap-x-4 text-muted-foreground hover:text-foreground">
                            <IconSearch className="h-4 w-4" />
                            <span> Quick search ... </span>
                            <span className="flex items-center">
                                <IconCommand /> K
                            </span>
                        </button>
                        <ThemeToggle />

                        {auth.user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center justify-between focus:outline-none gap-x-4">
                                    {auth.user.name}
                                    <IconChevronDown className="w-4 h-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="mt-2 w-72">
                                    <DropdownMenuLabel>
                                        <div className="flex items-center font-normal">
                                            <div className="shrink-0 mr-3">
                                                <img className="rounded-full w-8 h-8" src={auth.user.avatar} />
                                            </div>
                                            <div>
                                                <div>{auth.user.name}</div>
                                                <div className="text-muted-foreground">{auth.user.email}</div>
                                            </div>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
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
                            <div className="flex gap-x-2">
                                <Button className="rounded-full" size='sm' variant='secondary' asChild>
                                    <Link href={route("login")}>Login</Link>
                                </Button>
                                <Button className="rounded-full" size='sm' asChild>
                                    <Link href={route("register")}>Register</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
