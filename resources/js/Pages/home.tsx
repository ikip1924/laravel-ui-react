import Container from "@/components/container";
import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Home() {
    return (
        <>
            <Head title="Welcome to my life" />

            <Container >
                <div className="py-12">
                    Home
                </div>
            </Container>
        </>
    )
}

Home.layout = (page: React.ReactNode) => <AppLayout children={page} />;
