'use client'
import { Evento } from "../modelos/Evento"

type Props = {
    eventos: Evento[],
    restablecer: (id: number) => void,
}

export default function TablaEventosEliminados({eventos, restablecer}:Props) {
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
                            <button onClick={() => restablecer(e.id)}>Restablecer</button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}
