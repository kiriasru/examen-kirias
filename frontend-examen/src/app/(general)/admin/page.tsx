'use client'
import { useEffect, useState } from "react"
import { useEvento } from "@/app/providers/ProviderEvento"
import { Evento } from "@/app/modelos/Evento"
import TablaEventos from "@/app/components/TablaEventos"
import TablaEventosEliminados from "@/app/components/TablaEventosEliminados"

export default function page() {

    const { eventos, eventosEliminados, guardarEvento, actualizarEvento, eliminarEvento, restablecerEvento, obtenerEventos} = useEvento();
    const [id, setId] = useState(0);
    const [nombreEvento, setNombreEvento] = useState('');
    const [direccion, setDireccion] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [accion, setAccion] = useState<number>(0);

    useEffect(() => {
        obtenerEventos();
    }, []);

    function limpiar() {
        setId(0);
        setNombreEvento('');
        setDireccion('');
        setFechaInicio('');
        setFechaFin('');
        setAccion(0);
    }

    function guardar() {
        const evento:Evento = {
            id: id === 0 ? Date.now() : id,
            nombreEvento: nombreEvento,
            direccion: direccion,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            estado: 'activo'
        }

        if (accion === 0) {
            guardarEvento(evento);
        } else {
            actualizarEvento(evento);
        }

        limpiar();
    }

    function editar(evento:Evento) {
        setId(evento.id);
        setNombreEvento(evento.nombreEvento);
        setDireccion(evento.direccion);
        setFechaInicio(evento.fechaInicio);
        setFechaFin(evento.fechaFin);
        setAccion(1);
    }


    return (
        <div>
            <div>

                <div>
                    <h2>Creaction Eventos</h2>
                    <div>
                        <input type="text" placeholder="Nombre Evento" value={nombreEvento} onChange={(e) => setNombreEvento(e.target.value)} />
                        <input type="text" placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                        <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
                        <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} />
                        <button onClick={guardar}>Guardar</button>
                    </div>
                </div>

                <div>
                    <h2>Eventos agregados</h2>
                    <TablaEventos eventos={eventos} editar={editar} eliminar={eliminarEvento} />
                </div>
            </div>

            <div>
                <h2>Lista de eventos eliminados</h2>
                <TablaEventosEliminados eventos={eventosEliminados} restablecer={restablecerEvento} />
            </div>
        </div>
    )
}