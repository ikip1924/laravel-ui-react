import { useRef, FormEventHandler } from 'react';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';

export default function UpdatePasswordForm() {
    const passwordInput = useRef<HTMLInputElement>();
    const currentPasswordInput = useRef<HTMLInputElement>();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Update Password</CardTitle>

                <CardDescription>
                    Ensure your account is using a long, random password to stay secure.
                </CardDescription>
            </CardHeader>

       <CardContent>
            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <Label htmlFor="current_password" >
                        Current Password
                    </Label>

                    <Input
                        id="current_password"
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        type="password"
                        className="block w-full mt-1"
                        autoComplete="current-password"
                    />

                    <InputError message={errors.current_password} className="mt-2" />
                </div>

                <div>
                    <Label htmlFor="password">
                        New Password
                    </Label>

                    <Input
                        id="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="block w-full mt-1"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <Label htmlFor="password_confirmation">
                        Confirm Password
                    </Label>

                    <Input
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        type="password"
                        className="block w-full mt-1"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Save</Button>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-muted-foreground">Saved.</p>
                    </Transition>
                </div>
            </form>
       </CardContent>
        </Card>
    );
}
