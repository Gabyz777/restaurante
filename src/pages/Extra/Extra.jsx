import styles from "./Extra.module.css";

const CardAvaliacao = ({ item }) => {
  return (
    <div className={styles.cardAvaliacao}>
      <img src={item.fotoPrato} alt={item.cliente} className={styles.fotoPrato} />
      <div className={styles.conteudoCard}>
        <h3 className={styles.nomeCliente}>{item.cliente}</h3>
        <div className={styles.estrelas}>{"★".repeat(item.estrelas)}</div>
        <p className={styles.comentario}>"{item.comentario}"</p>
      </div>
    </div>
  );
};


export default function Extra() {
  const avaliacoes = [
    {
      id: 1,
      cliente: "Julia Silva",
      comentario: "O risoto estava impecável!",
      fotoPrato: "https://via.placeholder.com/300x200",
      estrelas: 5
    },
    {
      id: 2,
      cliente: "Marcos Souza",
      comentario: "Melhor sobremesa da cidade.",
      fotoPrato: "https://via.placeholder.com/300x200",
      estrelas: 4
    }
  ];

  return (
    <section className={styles.avaliacoesContainer}>
      <h2>Avaliações dos Clientes</h2>
      <div className={styles.avaliacoesGrid}>
        {avaliacoes.map((item) => (
          <CardAvaliacao key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}