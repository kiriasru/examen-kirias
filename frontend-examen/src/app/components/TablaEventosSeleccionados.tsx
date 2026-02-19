import { Evento } from "../modelos/Evento";

type Props ={
    eventos: Evento[]
}

export default function TablaEventosSeleccionados({eventos}:Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Fechas</th>
                </tr>
            </thead>
            <tbody>
                {eventos.map(e => (
                    <tr key={e.id}>
                        <td>{e.nombreEvento}</td>
                        <td>{e.direccion}</td>
                        <td>{e.fechaInicio} - {e.fechaFin}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
