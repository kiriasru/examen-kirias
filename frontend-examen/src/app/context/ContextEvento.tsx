import { createContext } from "react";
import { Evento } from "../modelos/Evento";

export const ContextEvento = createContext({
    eventos: [] as Evento[],
    eventosEliminados: [] as Evento[],
    eventosSeleccionados: [] as Evento[],
    guardarEvento: (evento: Evento) => {},
    actualizarEvento: (evento: Evento) => {},
    eliminarEvento: (id: number) => {},
    restablecerEvento: (id: number) => {},
    seleccionarEvento: (evento: Evento) => {},
    obtenerEventos: () => {}
});