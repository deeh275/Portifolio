import { useState } from 'react'
import Header from './assets/componentes/header.jsx'
import './assets/componentes/header.scss';
import Home from './assets/componentes/home.jsx'
import './assets/componentes/home.scss';
import Carrosel from './assets/componentes/carrosel.jsx';
import './assets/componentes/carrosel.scss';
import Projetos from './assets/componentes/projetos.jsx';
import './assets/componentes/projetos.scss';
import Sobre from './assets/componentes/sobreMim.jsx';
import './assets/componentes/sobreMim.scss';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
      <Home/>
      <Carrosel />
      <Projetos />
      <Sobre />

    </main>
   
     
    </>
  )
}

export default App
