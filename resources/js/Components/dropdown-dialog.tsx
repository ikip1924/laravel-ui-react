
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { DropdownMenuItem } from './ui/dropdown-menu'
import { Icon } from './icon'
import * as icons from '@tabler/icons-react'

interface Props {
    trigger_text: string,
    title?: string,
    description: string,
    cancel_text?: string,
    submit_text?: string,
    action: () => void;
    icon: keyof typeof icons;


}


export default function DropdownDialog({ trigger_text, title = 'Are you absolutely sure?', description, cancel_text = 'Cancel', submit_text = 'Continue', action, icon }: Props) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
                    <Icon className='mr-2' name={icon} />
                    {trigger_text}
                </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{cancel_text}</AlertDialogCancel>
                    <AlertDialogAction onClick={action}>{submit_text}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
