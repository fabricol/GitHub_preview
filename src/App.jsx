import React, { useState } from "react";

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imcResult, setImcResult] = useState(null); 
  const [isIMCCalculated, setIsIMCCalculated] = useState(false); 

  const classifyIMC = (imc) => {
    const imcRanges = [
      { min: 0, max: 17, classification: "Muito abaixo do peso" },
      { min: 17, max: 18.5, classification: "Abaixo do peso" },
      { min: 18.5, max: 25, classification: "Peso normal" },
      { min: 25, max: 30, classification: "Acima do peso" },
      { min: 30, max: 35, classification: "Obesidade grau 1" },
      { min: 35, max: 40, classification: "Obesidade grau 2 (Severa)" },
      { min: 40, max: Infinity, classification: "Obesidade grau 3 (MÃ³rbida)" }
    ];

    const { classification } = imcRanges.find(
      range => imc >= range.min && imc < range.max
    );

    return classification;
  };
  
  const calculateIMC = () => {
    const alturaM = parseFloat(altura) / 100; 
    const alturaAltura = alturaM * alturaM; 
    const resultado = parseFloat(peso) / alturaAltura;  
    const resultadoFormatado = resultado.toFixed(2); 

  const classification = classifyIMC(resultadoFormatado);

  setImcResult(`${classification} ${resultadoFormatado}`);
  setIsIMCCalculated(true);
  };


  const handleInputChange = (e) => {
    setIsIMCCalculated(false); 
    if (e.target.id === "peso") {
      setPeso(e.target.value);  
    } else if (e.target.id === "altura") {
      setAltura(e.target.value); 
    }
  };

    

  

  return (
    <div className="container">
      <header>

        
      </header>
      <form className="formulario">
        <div className="peso">
          <h2>Peso (Kg)</h2>
          <input type="number" id="peso" onChange={handleInputChange} />
        </div>
        <div className="altura">
          <h2>Altura (Cm)</h2>
          <input type="number" id="altura" onChange={handleInputChange} />
        </div>
      </form>
      {isIMCCalculated && ( 
        <div className="resultado">
          <h2>Resultado :</h2>
          {imcResult}
        </div>
      )}
      <div className="peso">
        <button onClick={calculateIMC}>Calcular IMC</button> 
      </div>
    </div>
  );
}

export default App;
