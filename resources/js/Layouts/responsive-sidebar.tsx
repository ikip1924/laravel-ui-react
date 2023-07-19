import ApplicationLogo from "@/components/application-logo"
import Menu from "@/components/menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "@inertiajs/react"


export default function ResponsiveSideBar({
    open, setOpen
}: {
    open: boolean
    setOpen: (open: boolean) => void
}) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent className="w-[90%]" side='left'>
                <Link className="block mb-8" href="/">
                    <ApplicationLogo className="w-auto h-8 mr-4 fill-foreground" />
                </Link>
                <Menu />
            </SheetContent>
        </Sheet>

    )
}
