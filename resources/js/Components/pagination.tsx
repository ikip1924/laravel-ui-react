import { Link } from "@inertiajs/react"
import { Button } from "./ui/button"

export function SimplePagination({ links }: {
    links: {
        first: string,
        last: string,
        prev: string | null,
        next: string | null,
    }
}) {
    return (
        <div className="flex items-center gap-x-1">
            {links.prev !== null ? (
                <Button className="rounded-full text-xs px-6" variant='outline' size='sm' asChild>
                    <Link preserveScroll preserveState href={links.prev}>
                        Prev
                    </Link>
                </Button>
            ) : <Button className="rounded-full text-xs px-6" variant='outline' size='sm' asChild disabled>
                <span>Prev</span>
            </Button>}
            {links.next !== null ? (
                <Button className="rounded-full text-xs px-6" variant='outline' size='sm' asChild >
                    <Link preserveScroll preserveState href={links.next}>
                        Next
                    </Link>
                </Button>
            ) : <Button className="rounded-full text-xs px-6" variant='outline' size='sm' asChild disabled>
                <span>
                    Next
                </span>
            </Button>}
        </div>
    )
}
