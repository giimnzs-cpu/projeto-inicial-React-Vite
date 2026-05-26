import InputField from './InputField'
import BotaoEnviar from './BotaoEnviar'
import Contador from './Contador';
import { useEffect, useState } from 'react';

function FormularioCadastro() {
    // const [nome, setNome] = useState('')
    // const [email, setEmail] = useState('')
    // const [telefone, setTelefone] = useState('')
    const [number, setNumber] = useState('')
    const [erro, setErro] = useState('')
    const [sucesso, setSucesso] = useState(false)
    const [user, setUser] = useState({ nome: "", email: "", telefone: "", segundoTelefone: "" })

    const handleSubmit = (e) => {
        e.preventDefault() // Não deixa carregar a página.


        if (user.nome.trim() === "") {
            setErro('O campo desse nome está sem nada, preencha!')
            console.log(erro)
            return
        }

        if (user.telefone.length != 11) {

            setErro("O campo necessita de 11 dígitos")
            console.log({ erro })
            return
        }
    

        setErro('')
        setSucesso(true)
        console.log(user)// Envio para o banco

try{

            const resposta = await fetch('http://localhost:3000/registros', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({nome, email, telefone})
})
const resultado = resposta.json()
console.log(resultado)
}catch(error){
    console.log('Erro ao conectar ao servidor', error)
};


    }
    return (

        <form onSubmit={handleSubmit}>

            {erro && <p style={{ color: "red" }}>{erro}</p>}
            {sucesso && <p style={{ color: "green" }}>Sucesso!</p>}
            <InputField label="Nome:" type="text" name="nome"
                placeholder="Digite seu nome..."
                value={user.nome}
                onChange={(e) => setUser((dados) => ({
                    ...dados,
                    nome: e.target.value,
                }))} />

            <InputField label="Email:" type="email" name="email"
                placeholder="email@empresa.com"
                value={user.email}
                onChange={(e) => setUser((dados) => ({
                    ...dados,
                    email: e.target.value
                }))} />

            <InputField label="Idade:" type="number" name="number"
                placeholder="18 anos"
                value={user.number}
                onChange={(e) => setNumber((dados) => ({
                    ...dados,
                    number: e.target.value
                }))} />

            <InputField label="Telefone:" type="text" name="Telefone"
                placeholder="(79) 99999-9999"
                value={user.telefone}
                onChange={(e) => setUser((dados) => ({
                    ...dados,
                    telefone: e.target.value
                }))} />

            <BotaoEnviar texto="Cadastrar-se" />
        </form>

    )
}


useEffect(() => {
    fetch('http://localhost:3000/registros')
    .then(res => res.json())
    .then(dados => console.log(dados))
}, [])

export default FormularioCadastro;

