import DeleteUserForm from "./partials/delete-user-form";
import UpdatePasswordForm from "./partials/update-password-form";
import UpdateProfileInformationForm from "./partials/update-profile-information-form";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import AppLayout from "@/layouts/app-layout";
import Container from "@/components/container";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <>
            <Head title="Profile" />

            <div className="py-6 lg:py-12">
                <Container>
                    <div className="max-w-2xl space-y-6 sm:px-6 lg:px-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                        <UpdatePasswordForm />
                        <DeleteUserForm />
                    </div>
                </Container>
            </div>
        </>
    );
}

Edit.layout = (page: React.ReactNode) => <AppLayout children={page} />;
