
import SectionTitle from "@/components/section.title";
import { Card, CardFooter } from "@/components/ui/card";
import UserLayout from "@/layouts/user-layout";
import { Head, usePage } from "@inertiajs/react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { SimplePagination } from "@/components/pagination";
import UserListOptions from "./partials/user-list-options";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export default function Index() {
    const { data: users, meta, links } = usePage<any>().props.users;
    return (
        <>
            <Head title="Users" />

            <Card>
                <SectionTitle title="Usera" description="The List Of User Registered" />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Verified at</TableHead>
                            <TableHead>Created at</TableHead>
                            <TableHead />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.length > 0
                            ? (
                                <>
                                    {users.map((user: any, i: number) => (
                                        <TableRow>
                                            <TableCell className="w-0">{meta.from + i}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center font-normal">
                                                    <div className="shrink-0 mr-3">
                                                        <Avatar>
                                                            <AvatarImage src={user.avatar} />
                                                            <AvatarFallback>{user.acronym}</AvatarFallback>
                                                        </Avatar>
                                                    </div>
                                                    <div>
                                                        <div>{user.name}</div>
                                                        <div className="text-muted-foreground">{user.email}</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>{user.email_verified_at}</TableCell>
                                            <TableCell>{user.created_at}</TableCell>
                                            <TableCell>
                                                <div className="flex justify-end">
                                                    <UserListOptions user={user} />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </>
                            )
                            : <TableRow>
                                <TableCell colSpan={5}>No Users</TableCell>
                            </TableRow>}

                    </TableBody>
                </Table>
                <CardFooter className="pt-6 flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                        Showing you {meta.to} of {meta.total} users.
                    </span>
                    <SimplePagination links={links} />
                </CardFooter>
            </Card >
        </>
    )
}

Index.layout = (page: React.ReactNode) => <UserLayout children={page} />;
