import { useState } from 'react'
import Header from './assets/componentes/header.jsx'
import './assets/componentes/header.scss';
import Home from './assets/componentes/home.jsx'
import './assets/componentes/home.scss';
import Carrossel from './assets/componentes/carrossel.jsx';
import './assets/componentes/carrossel.scss';
import Projetos from './assets/componentes/projetos.jsx';
import './assets/componentes/projetos.scss';
import Sobre from './assets/componentes/sobreMim.jsx';
import './assets/componentes/sobreMim.scss';
import Servicos from './assets/componentes/servicos.jsx';
import './assets/componentes/servicos.scss';
// import Soft from './assets/componentes/softSkill.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
      <Home/>
      <Carrossel />
      <Projetos />
      <Sobre />
      <Servicos />
      {/* <Soft /> */}

    </main>
   
     
    </>
  )
}

export default App
