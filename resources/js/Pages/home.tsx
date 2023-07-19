import Container from "@/components/container";
import UserLayout from "@/layouts/user-layout";
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

Home.layout = (page: React.ReactNode) => <UserLayout children={page} />;
