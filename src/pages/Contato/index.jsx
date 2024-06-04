
import styles from './Contatos.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
    <>
        <section className={styles.contatos}>
            <h2>Contatos</h2>

            <h3>Entre em contato</h3>
            <p>Para mais informações acesse minhas redes</p>

            <div className={styles.icones}>
                        
                <a href='mailto:lucasmachado2233@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                </a>

                <a href='https://www.instagram.com/lmachaduuu/?hl=pt-br' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                </a>

                <a href='' target='_blank' rel='noopener noreferrer'>
                            <BsYoutube className={styles.icone} />
                </a>

                <a href='https://github.com/LMachadoS' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                </a>

                <a href='https://www.linkedin.com/in/lmachado-silva/' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone} />
                </a>

            </div>

        </section>
        
    </>
    )
}

export default Contatos