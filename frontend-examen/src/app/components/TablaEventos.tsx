'use client'
import { Evento } from "../modelos/Evento"

type Props = {
    eventos: Evento[],
    editar: (evento: Evento) => void,
    eliminar: (id: number) => void,
}


export default function TablaEventos({eventos, editar, eliminar}: Props) {
    return (
        <table>

            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Fechas</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {eventos.map(e => (
                    <tr key={e.id}>
                        <td>{e.nombreEvento}</td>
                        <td>{e.direccion}</td>
                        <td>{e.fechaInicio} - {e.fechaFin}</td>
                        <td>
                            <button onClick={() => editar(e)}>Editar</button>
                            <button onClick={() => eliminar(e.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}
