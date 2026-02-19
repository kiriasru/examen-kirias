export interface Evento {
    id: number;
    nombreEvento: string;
    direccion: string;
    fechaInicio: string;
    fechaFin: string;
    estado: "activo" | "inactivo";
}