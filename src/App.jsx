import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import InputField from './component/InputField'
import FormularioCadastro from './components/FormularioCadastro'

function App() {

  return (
    <div>
      <Cabecalho />
      <InputField />
            <h1>Olá, mundo!</h1>
      <p>Primeira aula de react!</p>
      <FormularioCadastro />
    </div>
    
      )
}

export default App
