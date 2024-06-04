import styles from './Sobre.module.css'

import html from './imagens/icon-html.svg'
import css from './imagens/icon-css.svg'
import js from './imagens/icon-js.svg'
import react from './imagens/icon-react.svg'
import node from './imagens/icon-node.svg'
import sql from './imagens/icon-sql.svg'
import avatar from './imagens/avatar.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
            <img src={avatar} alt="Avatar" className={styles.avatar} />
                
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Lucas Machado</span> <br />
                    <strong>Dev Full Stack em desenvolvimento</strong> </p>

                    <p>Lorem ipsum dolor sit amet. Ut quia recusandae 33 minus alias nam porro minus id quisquam obcaecati est harum placeat sit consequatur recusandae? Aut quibusdam dolores a architecto galisum At sunt inventore qui totam galisum!</p>

                    <p>Vel quas natus qui itaque amet qui praesentium illum ut culpa iure. Aut quae ipsum 33 voluptatem mollitia et culpa voluptatem et fuga soluta et pariatur quis. Est minima obcaecati qui assumenda distinctio ut unde illo et galisum mollitia!</p>

                    <p>Est voluptatibus quasi ut omnis ducimus et dolores asperiores ut cupiditate voluptatem. Ut rerum amet ut quis sint ut repellendus esse eos nihil dolor est odio quia et labore dolorum At atque animi. Est dolor distinctio non fuga perspiciatis non consequatur repellat qui nihil consequuntur.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" /> 
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                </div>
            </div>

        </section>
    )
}
export default Sobre;