import { useEffect } from "react";

function Projetos() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show"); 
                    } else {
                        entry.target.classList.remove("show"); 
                    }
                });
            },
            { threshold: 0.2 } 
        );

        const container = document.querySelector(".projetos-container");
        const projetos = container?.querySelectorAll(".projeto-grid");
        // Alterado para projeto-grid
        projetos.forEach((projeto) => observer.observe(projeto));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projetos">
            <div className="projetos-container">
                <h1 className="projeto-title">Projetos</h1>
                {/* <p>Projetos autorais desenvolvidos com foco em inovação e qualidade..</p> */}

                <div className="projeto-grid">
                    <div className="projeto-image"

                        style={{ backgroundImage: `url("Captura de tela 2025-04-07 144332.png")` }}>

                    </div>


                    <div className="projeto-descricao">

                        <h2 className="Title-descricao">Sistema Inteligente de Catálogo de Filmes com Busca Interativa</h2>

                        <p className="descricao-texto">App desenvolvido com React.js, CSS, Ionic e integração com uma biblioteca de filmes online (API externa), oferecendo uma interface moderna, responsiva e focada em dispositivos móveis.

                            Este aplicativo permite que os usuários realizem buscas interativas por filmes, filtrando por título. tornando a navegação prática e personalizada. O app também fornece recomendações personalizadas com base no gênero e ano de lançamento, promovendo uma experiência dinâmica e intuitiva.</p>

                        <dvi>
                            <i
                                className="devicon-react-original colored icon-projeto" title="React"
                            ></i>
                            <i
                                className="devicon-css3-plain colored icon-projeto" title="CSS3"
                            ></i>
                            <i
                                className="devicon-ionic-original colored icon-projeto" title="Ionic"
                            ></i>


                        </dvi>
                    </div>

                </div>

                <div className="projeto-grid"> 
                    <div className="projeto-image" style={{ backgroundImage: `url("skillhub.png")` }}></div>
                    <div className="projeto-descricao">
                        <h2 className="Title-descricao">Aplicativo de Serviços – Dryclenerc (em desenvolvimento)</h2>

                        <p>Aplicativo desenvolvido utilizando React.js, CSS e Vite, com backend próprio para gerenciar autenticação, dados e notificações. O projeto está em andamento e foca em uma interface responsiva e otimizada para dispositivos móveis.

                            A plataforma possibilita buscas rápidas e filtradas para que clientes encontrem prestadores adequados, enquanto profissionais têm acesso a oportunidades reais de trabalho. Conta com cadastro de usuários, avaliações, feedbacks e sistema de notificações para acompanhamento dos pedidos.

                            Integrações futuras com APIs externas visam ampliar os serviços disponíveis, proporcionando uma experiência dinâmica e personalizada para os usuários.</p>


                        <dvi>
                            <i
                                className="devicon-react-original colored icon-projeto" title="React"
                            ></i>
                            <i
                                className="devicon-css3-plain colored icon-projeto" title="CSS3"
                            ></i>
                            <i
                                className="devicon-vite-original colored icon-projeto" title="vite"
                            ></i>

                            <i className="devicon-nodejs-plain colored icon-projeto" title="Node.js"></i>



                        </dvi>
                    </div>


                </div>

                <div className="projeto-grid"> {/* Alterado para projeto-grid */}
                    <div className="projeto-image" style={{ backgroundImage: `url("vagaja.png")` }}></div>
                    <div className="projeto-descricao">
                        <h2 className="Title-descricao">Vagajá Plataforma Mobile para Reservas de Estacionamento em Eventos</h2>
                        <p>VagaJá é um aplicativo mobile desenvolvido para facilitar o aluguel antecipado de vagas de estacionamento para eventos, shows, feiras e encontros em geral.

                            Com uma interface moderna, intuitiva e responsiva, o app permite que usuários busquem, reservem e garantam suas vagas com antecedência, evitando imprevistos e filas no dia do evento.

                            Além disso, o VagaJá possibilita que donos de estacionamentos ou imóveis disponibilizem suas vagas para locação temporária, criando novas oportunidades de renda.

                            O objetivo do aplicativo é proporcionar mais praticidade, segurança e conforto na hora de estacionar, tornando a experiência de mobilidade em eventos mais organizada e tranquila.</p>

                             <dvi>
                            <i
                                className="devicon-react-original colored icon-projeto" title="React"
                            ></i>
                            <i
                                className="devicon-css3-plain colored icon-projeto" title="CSS3"
                            ></i>
                            <i
                                className="devicon-vite-original colored icon-projeto" title="vite"
                            ></i>

                            <i className="devicon-nodejs-plain colored icon-projeto" title="Node.js"></i>



                        </dvi>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Projetos;
