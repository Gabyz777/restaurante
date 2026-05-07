import Card from '../../components/Card/Card';
import styles from './Home.module.css';

import imgLogo from '../../img/Logo.png';

function Home() {
    const destaques = [
        { id: 1, t: 'Os melhores', d: 'Os melhores pratos você encontrará aqui!' },
        {
            id: 2,
            t: 'Ambiente agradável',
            d: 'Venha desfrutar de um ambiente acolhedor e confortável.',
        },
        {
            id: 3,
            t: 'Atendimento de qualidade',
            d: 'Nossa equipe está pronta para oferecer um atendimento excepcional.',
        },
        {
            id: 4,
            t: 'Ingredientes frescos',
            d: 'Utilizamos apenas ingredientes frescos para garantir o melhor sabor.',
        },
        {
            id: 5,
            t: 'Variedade de opções',
            d: 'Oferecemos uma ampla variedade de pratos para todos os gostos.',
        },
        {
            id: 6,
            t: 'Preços acessíveis',
            d: 'Desfrute de uma refeição deliciosa sem gastar muito.',
        },
    ];

    return (
        <section className={styles.homeContainer}>
            <h1>Bem-vindo ao Nosso Restaurante</h1>
            <p>O melhor restaurante que você vai conhecer</p>
            <div className={styles.grid}>
                {destaques.map((item) => (
                    <Card key={item.id} titulo={item.t} descricao={item.d}></Card>
                ))}
            </div>
            <img src={imgLogo} alt="Logo" className={styles.logo} />
        </section>
    );
}
export default Home;
