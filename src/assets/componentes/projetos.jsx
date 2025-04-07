import { useEffect } from "react";

function Projetos() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show"); // Aparece ao entrar
                    } else {
                        entry.target.classList.remove("show"); // Some ao sair
                    }
                });
            },
            { threshold: 0.2 } // Ativa quando 20% do card estiver visível
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
                        <p></p>
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

                <div className="projeto-grid"> {/* Alterado para projeto-grid */}
                    <div className="projeto-image"></div>
                    <div className="projeto-descricao">
                        <h2>Projeto 2</h2>
                        <p>Descrição do projeto 2.</p>
                    </div>
                </div>

                <div className="projeto-grid"> {/* Alterado para projeto-grid */}
                    <div className="projeto-image"></div>
                    <div className="projeto-descricao">
                        <h2>Projeto 3</h2>
                        <p>Descrição do projeto 3.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projetos;
