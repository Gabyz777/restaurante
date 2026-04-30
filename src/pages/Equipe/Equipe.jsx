import styles from './Equipe.module.css';

function Equipe() {
  return (
    <section className={styles.equipe}>
      <h1>Nossa Equipe</h1>
      <div className={styles.membros}>
        <div className={styles.membro}>
          <div className={styles.fotoPlaceholder}>👤</div>
          <h4>Anne Todão</h4>
          <p>Proprietária</p>
        </div>
        <div className={styles.membro}>
          <div className={styles.fotoPlaceholder}>👤</div>
          <h4>Gabrielly Dias</h4>
          <p>Proprietária</p>
        </div>
      </div>
    </section>
  );
}
export default Equipe;
