import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'


function Card({ name, description, html_url }) { //aqui precisamos colocar a propriedade, isso aqui eu to utilizando iguazinho vem no github 
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <a href={html_url} target="_blank" rel="nopenner noreferrer" className={styles.botao}> 
                    <BsArrowRight />
                </a>
            </div>
        </section>
    )
}

export default Card
