import {useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3000/registros'

export function useRegistros() {
    const [registros, setRegistros] = useState([])
    const [carregamento, setCarregamento] = useState(false)
    const [erro, setErro] = useState('')

    const buscar = async () => {
        setCarregando(true)
        try {
            const res = await fetch(BASE_URL)
            const dados = await res.json()
            setRegistros(dados)
        } catch {
            setErro('Erro ao carregar registros.')
        } finally {
            setCarregando(false)
        }

        useEffect(() => {
            buscar()
        }, [])
    }

    const criar = async (dados) => {
        try{
            const res = await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(dados)
            })
            if (!res.ok) {
                const err = await res.json()
                throw new Error(err.erro)
            }
            await buscar()
        }catch (e) {
            setErro(e.message)
            throw e
        }
    }

    const atualizar = async (id, dados) => {
        // ... fetch com PUT para '${BASE_URL}/${id}'
        await buscar()
    }

    const deletar = async (id) => {
        // ... fetch com DELETE para '${BASE_URL}/${id}'
        await buscar()
    }
    // O retorno, carregando, erro, buscar, criar, atualizar, deletar
    return {registros, carregamento, erro, criar, atualizar, deletar}
            
    
    return { registros, carregando, erro}
}