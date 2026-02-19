'use client'
import { useEffect } from "react"
import { useEvento } from "@/app/providers/ProviderEvento"
import { Evento } from "@/app/modelos/Evento"
import BotonAsistir from "@/app/components/BotonAsistir"
import TablaEventosSeleccionados from "@/app/components/TablaEventosSeleccionados"

export default function page() {

    const { eventos, eventosSeleccionados, obtenerEventos } = useEvento();

    useEffect(() => {
        obtenerEventos();
    }, []);

    return (
        <div>

            <div>
                <div>
                    <h2>Lista de eventos</h2>
                    <table>

                        <thead>
                            <tr>
                                <th>Nombe</th>
                                <th>Direccion</th>
                                <th>Fechas</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {eventos.map((e:Evento) => (
                                <tr key={e.id}>
                                    <td>{e.nombreEvento}</td>
                                    <td>{e.direccion}</td>
                                    <td>{e.fechaInicio} - {e.fechaFin}</td>
                                    <td><BotonAsistir {...e} /></td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

                <div>
                    <h2>Lista de eventos seleccionados</h2>
                    <TablaEventosSeleccionados eventos={eventosSeleccionados} />
                </div>
            </div>


        </div>
    )
}