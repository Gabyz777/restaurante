import styles from './Extra.module.css';

import imgAval from '../../img/aval1.jpg';
import imgAtend from '../../img/vista.jpg';

const CardAvaliacao = ({ item }) => {
    return (
        <div className={styles.cardAvaliacao}>
            <img src={item.img} alt={item.cliente} className={styles.fotoPrato} />
            <div className={styles.conteudoCard}>
                <h3 className={styles.nomeCliente}>{item.cliente}</h3>
                <div className={styles.estrelas}>
                    {'★'.repeat(item.estrelas)}
                    {'☆'.repeat(5 - item.estrelas)}
                </div>
                <p className={styles.comentario}>"{item.comentario}"</p>
            </div>
        </div>
    );
};

export default function Extra() {
    const avaliacoes = [
        {
            id: 1,
            cliente: 'Julia Silva',
            comentario: 'O prato estava impecável! O ambiente é extremamente refinado.',
            img: imgAval,
            estrelas: 5,
        },
        {
            id: 2,
            cliente: 'Marcos Souza',
            comentario: 'Experiência gastronômica única. O atendimento é nota dez.',
            img: imgAtend,
            estrelas: 5,
        },
    ];

    return (
        <section className={styles.avaliacoesContainer}>
            <h2>O que dizem nossos clientes</h2>
            <div className={styles.avaliacoesGrid}>
                {avaliacoes.map((item) => (
                    <CardAvaliacao key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}
