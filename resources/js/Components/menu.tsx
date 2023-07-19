import { Separator } from "./ui/separator";
import VerticalNavLink from "./vertical-nav-link";


export default function Menu() {
    return (
        <ul className="flex flex-col gap-y-1">
            <VerticalNavLink active={route().current('dashboard')} href={route('dashboard')} icon='IconDashboard' >
                Dashboard
            </VerticalNavLink>
            <VerticalNavLink active={route().current('profile.edit')} href={route('profile.edit')} icon='IconSettings' >
                Settings
            </VerticalNavLink>
            <Separator className="my-2" />
            <VerticalNavLink href={'#'} icon='IconPhoto' >
                Gallery
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon='IconArticle' >
                Articles
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon='IconMessage' >
                Comments
            </VerticalNavLink>
            <Separator className="my-2" />
            <VerticalNavLink href={'#'} icon='IconBrandOpenai' >
                Ask Ai
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon='IconBrandDiscord' >
                Forum
            </VerticalNavLink>
        </ul>
    )
}
