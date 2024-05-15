import React, { useState } from "react";

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const IMC = () => {
    const alturaM = parseFloat(altura) / 100;
    const alturaAltura = parseFloat(alturaM) * parseFloat(alturaM);
    const resultado = parseFloat(peso) / alturaAltura;
    const resultadoFormatado = resultado.toFixed(2);
    if (resultadoFormatado < 17) {
      return "Muito abaixo do peso " + resultadoFormatado;
    } else if (resultadoFormatado < 18.49) {
      return "Abaixo do peso " + resultadoFormatado;
    } else if (resultadoFormatado < 24.99) {
      return "Peso normal " + resultadoFormatado;
    } else if (resultadoFormatado < 29.99) {
      return "Acima do peso " + resultadoFormatado;
    } else if (resultadoFormatado < 34.99) {
      return "Obesidade grau 1 " + resultadoFormatado;
    } else if (resultadoFormatado < 39.99) {
      return "Obesidade grau 2 (Severa) " + resultadoFormatado;
    } else {
      return "Obesidade grau 3 (Mórbida) " + resultadoFormatado;
    }
    
  };

  

  return (
    <div>
      <form className="formulario">
        <div className="peso">
          <h2>Peso (Kg)</h2>
          <input type="number" onChange={(evento) => setPeso(evento.target.value)} />
        </div>
        <div className="altura">
          <h2>Altura (Cm)</h2>
          <input type="number" onChange={(evento) => setAltura(evento.target.value)} />
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Menor que 17</td>
            <td>Muito abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 17 e 18,49</td>
            <td>Abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 18,5 e 24,99</td>
            <td>Peso normal</td>
          </tr>
          <tr>
            <td>Entre 25 e 29,99</td>
            <td>Acima do Peso</td>
          </tr>
          <tr>
            <td>Entre 30 e 34,99</td>
            <td>Obesidade I</td>
          </tr>
          <tr>
            <td>Entre 35 e 39,99</td>
            <td>Obesidade II (severa)</td>
          </tr>
          <tr>
            <td>Acima de 40</td>
            <td>Obesidade III (Mórbida)</td>
          </tr>
        </tbody>
      </table>
    <div className="peso" >
      <h2>Resultado :</h2>
      {IMC()}
    </div>  
    </div>
  );
}

export default App;
