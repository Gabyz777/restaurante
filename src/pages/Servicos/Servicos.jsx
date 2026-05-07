import styles from './Servicos.module.css';

import imgLasanha from '../../img/Lasanha.avif';
import imgMassa from '../../img/massa.jpg';
import imgRisoto from '../../img/risoto.avif';
import imgMedalhao from '../../img/medalhao.jpg';

function Servicos() {
  const listaServicos = [
    {
      id: 1,
      nome: "Lasanha à Milanesa",
      desc: "Uma massa leve, molhos caseiros e muito amor",
      img: imgLasanha
    },
    {
      id: 2,
      nome: "Risoto de Filé Mignon",
      desc: "Um delicioso risoto",
      img: imgRisoto
    },
    {
      id: 3,
      nome: "Medalhão de Filé Mignon",
      desc: "Medalhão suculento, acompanhado de um molho especial",
      img: imgMedalhao
    },
    {
      id: 4,
      nome: "Massa Artesanal",
      desc: "Massa leve e caseira...",
      img: imgMassa
    }
  ];

  return (
    <section>
      <h1>Nossos Principais Pratos</h1>
      <div className={styles.lista}>
        {listaServicos.map(s => (
          <div key={s.id} className={styles.servicoCard}>
            {s.img && <img src={s.img} alt={s.nome} className={styles.fotoPrato} />}
            <h3>{s.nome}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;
