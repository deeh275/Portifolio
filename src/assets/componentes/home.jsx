import TextoDigitando from "./JShome.jsx";

function Home() {
    return (
        <section id="home" className="home-container">
            <div className="home-content">
                <h1 className="home-title">Transformo ideias em códigos e código em soluções eficientes.</h1>
                <TextoDigitando 
                    texto="Olá, meu nome é David, sou desenvolvedor Full Stack apaixonado por tecnologia e inovação. Minha missão é criar aplicações escaláveis, intuitivas e eficientes, sempre buscando a melhor experiência para o usuário."
                    velocidade={30}
                />
            </div>
        </section>
    );
}

export default Home;
