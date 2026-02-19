'use client'
import { useState } from "react"
import { Evento } from "../modelos/Evento"
import { useEvento } from "../providers/ProviderEvento"

export default function BotonAsistir(item:Evento) {

    const {seleccionarEvento } = useEvento();

    function confirmar() {
        seleccionarEvento(item);
    }

    return (
        <button type="button" onClick={confirmar}>
            Asistir
        </button>
    )
}
