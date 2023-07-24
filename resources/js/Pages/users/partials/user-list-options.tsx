import React from 'react'
import { User } from '@/types'
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger

} from "@/components/ui/dropdown-menu"
import { Icon } from '@/components/icon'

import { IconUserPlus } from '@tabler/icons-react'


export default function UserListOptions({ user }: { user: User }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className='h-7' variant='outline' size='icon'>
                    <Icon name='IconDots' className='w-3.5 h-3.5' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-56'>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Icon className='mr-2' name='IconId' />
                    Details
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Icon className='mr-2' name='IconPencil' />
                    Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Icon className="mr-2 h-4 w-4" name="IconShare" />
                        Share
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent className="w-40">
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandFacebook" /> Facebook
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandInstagram" /> Instagram
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandTwitter" /> Twitter
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Icon className="mr-2 h-4 w-4" name="IconSend" />
                        Publish
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent className="w-40">
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandFacebook" /> Facebook
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandInstagram" /> Instagram
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandTwitter" /> Twitter
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandWhatsapp" /> WhatsApp
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandTelegram" /> Telegram
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>


                <DropdownMenuItem>
                    <Icon className='mr-2' name='IconBan' />
                    Ban
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Icon className='mr-2' name='IconTrash' />
                    Delete Permanent
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>












    )
}
