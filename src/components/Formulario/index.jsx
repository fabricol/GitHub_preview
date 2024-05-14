
import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');


    useEffect(() => {
        console.log("o estado mudou")
    }, [nome]);//só aparece a mensagem quando o nome muda



    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.targe.value)
        setNome(estadoAnterior => {

            return evento.target.value
        }) 
    }

    const renderizaResultado = () => {
        const soma = parseInt(materiaA) + parseInt(materiaB) + parseInt(materiaC);
        const media = soma / 3;


        if(media >= 7) {
            return (
                <p>Olá {nome}, foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, não foi aprovado</p>
            )
        }

    }
    

    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(evento.target.value)}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(evento.target.value)}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(evento.target.value)}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario