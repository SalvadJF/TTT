import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function UpdateDatosUsuario({
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, post, errors, processing } = useForm({
        descripcion: user.descripcion || "",
        fecha_nacimiento: user.fecha_nacimiento || "",
        avatar: null,
    });

    const [descriptionSaved, setDescriptionSaved] = useState(false);
    const [birthdateSaved, setBirthdateSaved] = useState(false);
    const [avatarSaved, setAvatarSaved] = useState(false);

    const submitDescription = (e) => {
        e.preventDefault();
        post(route("user.cambiardescripcion", user.id), {
            onSuccess: () => {
                setDescriptionSaved(true);
                setTimeout(() => setDescriptionSaved(false), 2000); // Reset after 2 seconds
            },
        });
    };

    const submitBirthdate = (e) => {
        e.preventDefault();
        post(route("user.cambiarcumple", user.id), {
            onSuccess: () => {
                setBirthdateSaved(true);
                setTimeout(() => setBirthdateSaved(false), 2000); // Reset after 2 seconds
            },
        });
    };

    const submitAvatar = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('avatar', data.avatar);
        formData.append('_method', 'post');

        post(route("user.cambiaravatar", user.id), {
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
            onSuccess: () => {
                setAvatarSaved(true);
                setTimeout(() => setAvatarSaved(false), 2000); // Reset after 2 seconds
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-koulen">Datos sobre ti</h2>
                <p className="mt-1 text-sm font-lato">
                    Informacion que quieras compartir con otros usuarios
                </p>
            </header>

            <form onSubmit={submitAvatar} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="avatar" value="Avatar" />
                    <input
                        id="avatar"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setData("avatar", e.target.files[0])}
                        className="mt-1 block w-full text-black bg-white"
                    />
                    <InputError className="mt-2" message={errors.avatar} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Guardar</PrimaryButton>
                    <Transition
                        show={avatarSaved}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm">Guardado.</p>
                    </Transition>
                </div>
            </form>


            <form onSubmit={submitDescription} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="descripcion" value="Descripción" />
                    <TextArea
                        id="descripcion"
                        className="mt-1 block w-full text-black"
                        value={data.descripcion}
                        onChange={(e) => setData("descripcion", e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.descripcion} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Guardar</PrimaryButton>
                    <Transition
                        show={descriptionSaved}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm">Guardado.</p>
                    </Transition>
                </div>
            </form>

            <form onSubmit={submitBirthdate} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="fecha_nacimiento" value="Fecha de Nacimiento" />
                    <TextInput
                        id="fecha_nacimiento"
                        type="date"
                        className="mt-1 block w-full text-black"
                        value={data.fecha_nacimiento}
                        onChange={(e) => setData("fecha_nacimiento", e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.fecha_nacimiento} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Guardar</PrimaryButton>
                    <Transition
                        show={birthdateSaved}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm">Guardado.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
