import { Evento } from "../modelos/Evento";

export default function TarjetaEvento(item:Evento) {

    return (
        <div>
            <h5>{item.nombreEvento}</h5>
            <p>{item.direccion}</p>
            <p>{item.fechaInicio} - {item.fechaFin}</p>
        </div>
    )
}
