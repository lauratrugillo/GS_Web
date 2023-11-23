"use client"

import './Sintomas.scss'

export default function Sintomas(){

    const usuario = JSON.parse(sessionStorage.getItem('usuario'));

    return(
        <main className='sintomas'>
            {usuario ? (
                <h1>Selecione um sintoma</h1>
            ) : (
                
                <h2>Faça <a href='/login'>login</a> ou <a href='/cadastro'>cadastro</a> para acessar esta página.</h2>
            )}

        </main>
    )
}