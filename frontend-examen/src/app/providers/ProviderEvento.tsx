'use client'
import { useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { Evento } from '../modelos/Evento'
import { ContextEvento } from '../context/ContextEvento'


export default function ProviderEvento({children}:Plantilla) {

    const [eventos, setEventos] = useState<Evento[]>([]);
    const [eventosEliminados, setEventosEliminados] = useState<Evento[]>([]);
    const [eventosSeleccionados, setEventosSeleccionados] = useState<Evento[]>([]);

    function guardarEvento(evento:Evento) {
        
        if (new Date(evento.fechaInicio) > new Date(evento.fechaFin)) {
            alert('La fecha inicio no puede ser mayor que la fecha fin');
            return;
        }

        setEventos([...eventos, evento]);

    }

    function actualizarEvento(evento:Evento) {
        setEventos(eventos.map(e => e.id === evento.id ? evento : e));
    }

    function eliminarEvento(id:number) {
        const eventoEncontrado = eventos.find(e => e.id === id);

        if (!eventoEncontrado) {
            return;
        }

        setEventos(eventos.filter(e => e.id !== id));
        setEventosEliminados([...eventosEliminados, {
            ...eventoEncontrado,
            estado: 'inactivo'
        }]);

    }

    function restablecerEvento(id:number) {

        const eventoEncontrado = eventosEliminados.find(e => e.id === id);

        if (!eventoEncontrado) {
            return;
        }

        setEventosEliminados(eventosEliminados.filter(e => e.id !== id));
        setEventos([...eventos, {
            ...eventoEncontrado,
            estado: 'activo'
        }]);

    }

    function seleccionarEvento(evento:Evento) {
        const mismoEvento = eventosSeleccionados.find(e => e.id === evento.id);

        if (mismoEvento) {
            alert('El evento ya esta seleccionado');
            return;
        }

        setEventosSeleccionados([...eventosSeleccionados, evento]);
    }

    async function obtenerEventos() {

        try {
            const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/evento`);
            const data = await resp.json();
            setEventos(data);

            const respEliminados = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/evento/eliminados`);
            const dataEliminados = await respEliminados.json();
            setEventosEliminados(dataEliminados);
        } catch (error) {
            console.log('Error', error);
            alert('Ocurrio un error');
        }

    }


  return (
    <ContextEvento.Provider value={{
        eventos,
        eventosEliminados,
        eventosSeleccionados,
        guardarEvento,
        actualizarEvento,
        eliminarEvento,
        restablecerEvento,
        seleccionarEvento,
        obtenerEventos
    }}>
        {children}
    </ContextEvento.Provider>
  )
}

export function useEvento() {
    return useContext(ContextEvento);
}