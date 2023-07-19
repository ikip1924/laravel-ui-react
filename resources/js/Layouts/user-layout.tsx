import { PropsWithChildren, useState } from "react";
import Navbar from "./navbar";
import ResponsiveNavbar from "./responsive-navbar";
import VerticalNavLink from "@/components/vertical-nav-link";
import { Separator } from "@/components/ui/separator";
import Menu from "@/components/menu";
import ResponsiveSideBar from "./responsive-sidebar";
import UserResponsiveNavbar from "./user-responsive-navbar";



export default function UserLayout({ children }: PropsWithChildren) {
    const [open, setOpen] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)
    return (
        <div>
            <UserResponsiveNavbar setOpenSidebar={setOpenSidebar} openCommandPalette={open} setOpenCommandPalette={setOpen} />
            <Navbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
            <ResponsiveSideBar open={openSidebar} setOpen={setOpenSidebar} />
            <div className=" py-6 px-4 grid lg:gap-8 lg:grid-cols-4 lg:px-10 lg:py-12">
                <div className="col-span-1 lg:block hidden">
                    <Menu />
                </div>
                <div className="lg:col-span-3">
                    {children}
                </div>
            </div>
        </div>
    );
}
