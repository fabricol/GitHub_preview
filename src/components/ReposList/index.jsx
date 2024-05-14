
import { useState, useEffect } from "react"
import styles from './ReposList.module.css'

const RepoList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson)
            },1000)
            
        })
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (

                <ul className={styles.list}>
                    {/* Desestruturação do código */}
                    {repos.map(({ id, language, name, html_url}) => (
                        <li className={styles.listItem}  key={id}>
                            <div className={styles.itemName} >
                                <b>Nome: </b>
                                {name} 
                            </div>
                            <div className={styles.itemLanguage} >
                                <b> Linguagem: </b>
                                {language}
                            </div>
                            <a className={styles.itemLink}  target="_blank" href={html_url}>Visitar no GitHub:</a>
                        </li>
                    ))}
                    <li>Repositório</li>
                </ul>
            ) }
        </div>
    )
}

export default RepoList;