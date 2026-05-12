import InputField from './InputField'
import BotaoEnviar from './BotaoEnviar'
import Contador from './Contador';
import { useState } from 'react';

function FormularioCadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    return(
        <div>
            <InputField label="Nome:" type="text" name="nome" placeholder="Digite seu nome"/>g
            <InputField label="Email:" type= "email" name="email" placeholder="email@empresa.com" />
            <InputField label="Idade:" type="number" name="number" placeholder="18 anos" />
            <InputField label="Telefone:" type="text" name="Telefone" placeholder="(79) 99999-9999" />
            <InputField label="Cidade:" type="text" name="Cidade" placeholder="Cidade que mora" />
            <InputField label="Estado:" type="text" name="Estado" placeholder="Estado que mora" />
            <BotaoEnviar texto="Cadastrar" />
        </div>
    )
}
export default FormularioCadastro;