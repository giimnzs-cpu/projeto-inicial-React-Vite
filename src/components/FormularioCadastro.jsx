import InputField from './InputField'
import BotaoEnviar from './BotaoEnviar'
import Contador from './Contador';
import { useState } from 'react';

function FormularioCadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [number, setNumber] = useState('')
    const [erro, setErro] = useState('')
    const [sucesso, setSucesso] = useState(false)

    const handleSubmit = (e) => {
     e.preventdefault() // Não deixa carregar a página.

    if (nome.trim() === ""){
        setErro('O campo desse nome está sem nada, preencha!')
        console.log(erro)
        return
}

  setErro('')
  setSucesso(true)
    console.log({nome, email, telefone})// Envio para o banco
    setSucesso(false)
}

    return(
     <form onSubmit={handleSubmit}>

            {erro && <p style={{color: "red"}}>{erro}</p>}
            {sucesso && <p style={{color: "green"}}>{sucesso}</p>}
            <InputField label="Nome:" type="text" name="nome" placeholder="Digite seu nome..." value={nome} onChange={(e) => setNome(e.target.value)} />
            <InputField label="Email:" type= "email" name="email" placeholder="email@empresa.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField label="Idade:" type="number" name="number" placeholder="18 anos" value={number} onChange={(e) => setNumber(e.target.value)} />
            <InputField label="Telefone:" type="text" name="Telefone" placeholder="(79) 99999-9999" value={telefone} onChange={(e) => setTelefone(e.target.value)} /> 
            <BotaoEnviar texto="Cadastrar" />
     </form>
    )
    }
export default FormularioCadastro;