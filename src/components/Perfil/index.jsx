import styles from './Perfil.module.css'

const Perfil = ({ nomeUsuario }) => {
    const usuario = {
        nome: 'Fabricio Miranda de Oliveira',
        avatar: 'https://github.com/fabricol.png',
        avatar1: 'https://avatars.githubusercontent.com/u/122180390?v=4',
    }


    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name} >
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;