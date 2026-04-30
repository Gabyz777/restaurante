import styles from './Sobre.module.css';

import imgMissao from '../../img/image.png'
import imgVisao from '../../img/visao.jpg'
import imgValores from '../../img/valores.jpg'

function Sobre() {
  return (
    <section className={styles.container}>
      <h1>Sobre Nós</h1>
      <p className={styles.descricao}>
        Somos um restaurante focado em culinária refinada!
      </p>
      
      <div className={styles.conteudoVertical}>

        <div className={styles.item}>
          <div className={styles.imagemBox}>
            <img src={imgMissao} alt="Missão" />
          </div>
          <div className={styles.textoBox}>
            <h3>Missão</h3>
            <p>Apresentar sempre o melhor do nosso trabalho</p>
          </div>
        </div>


        <div className={`${styles.item} ${styles.invertido}`}>
          <div className={styles.imagemBox}>
             <img src={imgVisao} alt="Visão" /> 
          </div>
          <div className={styles.textoBox}>
            <h3>Visão</h3>
            <p>Ser reconhecido como o melhor restaurante da região.</p>
          </div>
        </div>

       
        <div className={styles.item}>
          <div className={styles.imagemBox}>
            <img src={imgValores} alt="Valores" /> 
          </div>
          <div className={styles.textoBox}>
            <h3>Valores</h3>
            <p>Trabalhar com qualidade e profissionalismo impecável.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
export default Sobre;