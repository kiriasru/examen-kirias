'use client'
import Link from "next/link"
import { useUsuarioContext } from "../providers/ProviderUsuario"
import { useEvento } from "../providers/ProviderEvento"

export default function NavBar() {

    const { nombreUsuario, perfil } = useUsuarioContext();
    const { eventosSeleccionados } = useEvento();

    return (
        <nav>
            <div>
                <span>Eventos - {nombreUsuario}</span>
            </div>
            <div>
                <Link href="/(general)/admin">Admin</Link>
                <Link href="/(general)/consultor">Consultor <span>{eventosSeleccionados.length}</span></Link>
                <span>Perfil: {perfil}</span>
            </div>
        </nav>
    )
}
