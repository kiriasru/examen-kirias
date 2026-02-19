'use client'
import { useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { ContextUsuario } from '../context/ContextUsuario'

export default function ProviderUsuario({children}:Plantilla) {

    const [nombreUsuario, setNombreUsuario] = useState('');
    const [perfil, setPerfil] = useState('');

  return (
    <ContextUsuario.Provider value={{nombreUsuario, perfil, setNombreUsuario, setPerfil}}>
        {children}
    </ContextUsuario.Provider>
  )
}

export function useUsuarioContext() {
    return useContext(ContextUsuario);
}