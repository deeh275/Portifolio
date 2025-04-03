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

        const projetos = document.querySelectorAll(".projeto-container");
        projetos.forEach((projeto) => observer.observe(projeto));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="projetos-container">
            <h1 className="projeto-title">Projetos</h1>
            <p>Projetos desenvolvidos por mim.</p>

            <div className="projeto-container">
                <div className="projeto-image"></div>
                <div className="projeto-descricao">
                    <h2>Projeto 1</h2>
                    <p>Descrição do projeto 1.</p>
                </div>
            </div>

            <div className="projeto-container">
                <div className="projeto-image"></div>
                <div className="projeto-descricao">
                    <h2>Projeto 2</h2>
                    <p>Descrição do projeto 2.</p>
                </div>
            </div>

            <div className="projeto-container">
                <div className="projeto-image"></div>
                <div className="projeto-descricao">
                    <h2>Projeto 3</h2>
                    <p>Descrição do projeto 3.</p>
                </div>
            </div>
        </div>
    );
}

export default Projetos;
