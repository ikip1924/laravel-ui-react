import SectionTitle from "@/components/section.title";
import { Card } from "@/components/ui/card";
import UserLayout from "@/layouts/user-layout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Dashboard() {
    return (
        <>
            <Head title="Welcome to my life" />

            <Card>
                <SectionTitle title="Dashboard" description="Welcome to Dashboard" />
            </Card >
        </>
    )
}

Dashboard.layout = (page: React.ReactNode) => <UserLayout children={page} />;
