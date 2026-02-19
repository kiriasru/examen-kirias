'use client'
import { useState } from "react";
import { useUsuarioContext } from "./providers/ProviderUsuario";
import { useRouter } from "next/navigation";

export default function Home() {

    const [usuario, setUsuario] = useState<string>('');
    const [contra, setContra] = useState<string>('');
    const [perfilSeleccionado, setPerfilSeleccionado] = useState<string>('');
    const { setNombreUsuario, setPerfil } = useUsuarioContext();
    const router = useRouter();

    function iniciarSesion() {
        if (usuario === '' || contra === '') {
            alert('Ingresar credenciales');
            return;
        }

        setNombreUsuario(usuario);
        setPerfil((usuario === 'admin') ? 'admin' : 'consultor');

        router.push(usuario === 'admin' ? '/admin' : '/consultor');
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Correo" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={contra} onChange={(e) => setContra(e.target.value)} />
                <button type="button" onClick={iniciarSesion}>Iniciar</button>
            </form>
        </div>
    );
}
