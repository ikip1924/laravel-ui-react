import { PropsWithChildren, useState } from "react";
import Navbar from "./navbar";


export default function AppLayout({ children }: PropsWithChildren) {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Navbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
            {children}
        </div>
    );
}
