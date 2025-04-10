import React, { useEffect } from "react";

function Soft() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }


        })
      }
      , { threshold: 0.2 } // Ativa quando 20% do card estiver visível
    );
    const container = document.querySelector(".soft-container");
    const softSkills = container?.querySelectorAll(".soft-item"); // Alterado para soft-item

    softSkills.forEach((softSkill) => observer.observe(softSkill)); // Alterado para soft-item
    return () => observer.disconnect();
  }, []);
  return (<section id="softSkill">


    <div className="soft-container">

      <h1 className="soft-title">Soft Skill</h1>

      <div className="div-grid">
        <div className="soft-item">
          <h1 className="soft-subTitle">Comunicação clara</h1>
          <div className="soft-scroll">
            <p className="soft-text">No ambiente de desenvolvimento, acredito que a comunicação clara é essencial para alinhar expectativas, evitar retrabalho e fortalecer o trabalho em equipe. Busco sempre me expressar de forma precisa, tanto na documentação de código quanto nas interações com colegas, líderes e clientes. Saber ouvir também faz parte dessa habilidade, e isso me permite entender melhor as demandas e propor soluções eficazes.</p>
          </div>
        </div>

        <div className="soft-item">
          <h1 className="soft-subTitle">Resolução de Problemas</h1>
          <div className="soft-scroll">
            <p className="soft-text">Tenho uma abordagem analítica e prática para lidar com obstáculos técnicos e de projeto. Encaro os desafios como oportunidades de aprendizado e estou sempre em busca de soluções eficientes e escaláveis. Gosto de investigar a fundo, isolar o problema e aplicar boas práticas para entregar um resultado consistente e sustentável.</p>
          </div>
        </div>

        <div className="soft-item">
          <h1 className="soft-subTitle">Capacidade de Aprendizado Contínuo</h1>
          <div className="soft-scroll">
            <p className="soft-text">Em tecnologia, a única constante é a mudança. Por isso, estou sempre estudando, testando novas ferramentas e atualizando meus conhecimentos. Tenho facilidade para aprender de forma autônoma e estou constantemente expandindo meu repertório técnico com cursos, leitura de documentação oficial e projetos práticos.</p>
          </div>
        </div>

        <div className="soft-item">
          <h1 className="soft-subTitle">Trabalho Colaborativo</h1>
          <div className="soft-scroll">
            <p className="soft-text">Acredito que o desenvolvimento de software é um trabalho coletivo. Tenho facilidade em trabalhar com pessoas de diferentes áreas e perfis, buscando sempre o diálogo, a empatia e a colaboração. Compartilho conhecimento sempre que possível e valorizo um ambiente onde todos possam crescer juntos.</p>
          </div>
        </div>

        <div className="soft-item">
          <h1 className="soft-subTitle">Pensamento Lógico e Analítico</h1>
          <div className="soft-scroll">
            <p className="soft-text">Utilizo o raciocínio lógico como base para construir códigos limpos, eficientes e organizados. Estruturo minhas ideias de forma clara e costumo pensar nos impactos das decisões a longo prazo. Essa habilidade me ajuda tanto na arquitetura de soluções quanto na leitura e manutenção de sistemas existentes.</p>
          </div>
        </div>

        <div className="soft-item">
          <h1 className="soft-subTitle"> Gestão de Tempo e Priorização</h1>
          <div className="soft-scroll">
            <p className="soft-text">Tenho responsabilidade com prazos e foco em produtividade. Organizo minhas tarefas com base em prioridades, usando ferramentas de controle como Kanban, Trello ou Notion. Também sei dividir grandes entregas em etapas menores e mais gerenciáveis, sem perder a visão do todo.</p>
          </div>
        </div>

        <div className="soft-item">
          <h1 className="soft-subTitle"> Proatividade</h1>
          <div className="soft-scroll">
            <p className="soft-text">Não espero por ordens para agir. Sempre que percebo uma melhoria possível ou um risco, busco antecipar problemas e apresentar alternativas. Gosto de contribuir ativamente nas discussões técnicas e propor soluções que agreguem valor ao projeto e à equipe.</p>
          </div>
        </div>


        <div className="soft-item">
          <h1 className="soft-subTitle">Resiliência e Controle Emocional</h1>
          <div className="soft-scroll">
            <p className="soft-text">Entendo que nem sempre as coisas saem como o planejado, principalmente em ambientes ágeis. Lido bem com mudanças, pressão e feedbacks, mantendo a calma e o foco. Essa maturidade emocional me ajuda a tomar decisões melhores e a manter uma postura profissional mesmo em situações adversas.</p>
          </div>
        </div>
      </div>


    </div>
  </section>
  )

}
export default Soft;