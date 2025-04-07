import { useEffect } from "react";

function Servicos() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting){
                        entry.target.classList.add("show"); 
                    } else {
                        entry.target.classList.remove("show"); 
                    }

                });
            },
            { threshold: 0.2 } // Ativa quando 20% do card estiver visível
        );
        const container = document.querySelector(".servico-container");
        const servicos = container?.querySelectorAll(".servico-item"); 

        servicos.forEach((servico) => observer.observe(servico)); // Alterado para servico-item
        return () => observer.disconnect();
    }, []);
  return (
        <section id="servicos">
            <div className="container">
                <h1 className="servico">O que faço?</h1>

                <div className="servico-container">
                    <div className="servico-item">
                        <h2 className="servico-title">Sites Profissionais(Front-end)</h2>
                        <p>Criação de sites modernos, rápidos e adaptáveis a qualquer dispositivo (celular, tablet ou computador).
                            Pode ser um site institucional simples ou com animações suaves e seções interativas para atrair o público.</p>
                    </div>

                    <div className="servico-item">
                        <h2 className="servico-title"> Experiência do Usuário (UI/UX)</h2>
                        <p>Design pensado para facilitar o uso: organização visual, botões em destaque, navegação intuitiva e textos claros.
                            Ideal para quem deseja transmitir profissionalismo, confiança e manter os visitantes por mais tempo na página.</p>
                    </div>

                    <div className="servico-item">
                        <h2 className="servico-title"> Sistemas Personalizados(Api+Back-end)</h2>
                        <p>Desenvolvimento de sistemas completos e sob medida para empresas, incluindo painel administrativo, banco de dados seguro, login de clientes e integrações com APIs (WhatsApp, pagamentos, Google Maps).</p>
                    </div>

                    <div className="servico-item">
                        <h2 className="servico-title"> Aplicativos Mobile</h2>
                        <p>Desenvolvo aplicativos completos para Android e iOS com design moderno, interface intuitiva, integração com banco de dados e APIs externas (como mensagens, localização e pagamentos), além de armazenamento seguro de pedidos, cadastros e agendamentos, garantindo uma experiência prática</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Servicos;