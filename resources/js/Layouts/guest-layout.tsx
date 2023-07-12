import ApplicationLogo from "@/components/application-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function GuestLayout({
    title,
    children,
}: PropsWithChildren<{
    title: string;
}>) {
    return (
        <>
            <Head title={title} />
            <div className="flex flex-col items-center min-h-screen pt-6 px-4 sm:justify-center sm:pt-0 ">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
                    </Link>
                </div>

                <Card className="w-full mt-6 sm:max-w-md ">
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>{children}</CardContent>
                </Card>

                <div className="absolute bottom-0 mb-4 sm:top-0 right-4 sm:mt-4 mr-4">
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}
