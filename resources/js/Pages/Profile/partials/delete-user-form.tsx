import { useRef, useState, FormEventHandler } from "react";

import { useForm } from "@inertiajs/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import InputError from "@/components/InputError";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import SectionTitle from "@/components/section.title";
import { Card, CardContent } from "@/components/ui/card";


export default function DeleteUserForm() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <Card>
            <SectionTitle title={"Delete Account"} description="Once your account is deleted, all of its resources and data will be permanently
                    deleted. Before deleting your account, please download any data or information
                    that you wish to retain."
            />

            <CardContent>
                <Button onClick={() => setConfirmingUserDeletion(true)} variant='destructive'>
                    Delete Account
                </Button>
            </CardContent>


            <Dialog open={confirmingUserDeletion} onOpenChange={setConfirmingUserDeletion}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Are you sure you want to delete your account?
                        </DialogTitle>
                        <DialogDescription>
                            Once your account is deleted, all of its resources and data will be
                            permanently deleted. Please enter your password to confirm you would like to
                            permanently delete your account.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={deleteUser}>

                        <div className="mb-4">
                            <Label htmlFor="password" className="sr-only" > Password </Label>

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData("password", e.target.value)}
                                autoFocus
                                placeholder="Password"
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>
                        <DialogFooter>
                            <div>
                                <Button variant="outline" onClick={closeModal}>Cancel</Button>

                                <Button variant="destructive" className="ml-2" disabled={processing}>
                                    Delete Account
                                </Button>
                            </div>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>


            {/* <Button onClick={confirmUserDeletion}>Delete Account</Button>*/}
        </Card>
    );
}
