import { createContext } from "react";

export const ContextUsuario = createContext({
    nombreUsuario: '',
    perfil: '',
    setNombreUsuario: (nombre: string) => {},
    setPerfil: (perfil: string) => {}
});