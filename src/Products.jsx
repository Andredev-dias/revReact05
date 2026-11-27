import { Menu } from './components/menu'
import s from './Products.module.css'
import alunoFoto from '/joaopedefeijao.jpg'

function Products(){
    return(
        <>
            <Menu/>
            <section className={s.wrapProducts}>

                <div className={s.card}>
                    <div className={s.wrapImg}>
                        <img className={s.imagem} src={alunoFoto} alt="Foto exemplo" />
                    </div>
                    <div className={s.wrapCardTexts}>
                        <h2 className={s.cardTitle}>TITULO</h2>
                        <p className={s.cardText}>BLA BLA BLA BLA BLA</p>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Products