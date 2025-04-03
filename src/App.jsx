import { useState } from 'react'
import Header from './assets/componentes/header.jsx'
import './assets/componentes/header.scss';
import Home from './assets/componentes/home.jsx'
import './assets/componentes/home.scss';
import Carrosel from './assets/componentes/carrosel.jsx';
import './assets/componentes/carrosel.scss';
import Projetos from './assets/componentes/projetos.jsx';
import './assets/componentes/projetos.scss';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
      <Home/>
      <Carrosel />
      <Projetos />

    </main>
   
     
    </>
  )
}

export default App
