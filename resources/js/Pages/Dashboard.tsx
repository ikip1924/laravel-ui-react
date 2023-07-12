import Container from "@/components/container";
import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Dashboard() {
    return (
        <>
            <Head title="Welcome to my life" />

            <Container>
                <div className="py-12">
                    You are Log in
                </div>
            </Container>
        </>
    )
}

Dashboard.layout = (page: React.ReactNode) => <AppLayout children={page} />;
