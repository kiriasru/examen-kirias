'use client'
import NavBar from "../components/NavBar"
import { Plantilla } from "../modelos/Plantilla"
import ProviderEvento from "../providers/ProviderEvento"
import ProviderUsuario from "../providers/ProviderUsuario"

export default function layout({children}:Plantilla) {
    return (
        <ProviderUsuario>
            <ProviderEvento>
                <NavBar />
                {children}
            </ProviderEvento>
        </ProviderUsuario>
    )
}
