import { useState, useEffect } from "react";

const TextoDigitando = ({ texto, velocidade = 100 }) => {
  const [textoExibido, setTextoExibido] = useState("");
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    if (indice < texto.length) {
      const timeout = setTimeout(() => {
        setTextoExibido((prev) => prev + texto.charAt(indice));
        setIndice((prev) => prev + 1);
      }, velocidade);
      return () => clearTimeout(timeout);
    }
  }, [indice, texto, velocidade]);

  return (
    <p className="digitando-texto">
      {textoExibido}
      <span className="cursor">|</span>
    </p>
  );
};

export default TextoDigitando;
