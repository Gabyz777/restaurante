import styles from './Contato.module.css';
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
import { TbFileDescriptionFilled } from "react-icons/tb";

function Contato() {
  return (
    <div className={styles.contatoContainer}>
      <h2 className={styles.titulo}>Entre em Contato conosco!</h2>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <MdDriveFileRenameOutline className={styles.icone} />
          <input type="text" placeholder="Nome" className={styles.inputField} />
        </div>

        <div className={styles.inputGroup}>
          <MdEmail className={styles.icone} />
          <input type="email" placeholder="E-mail" className={styles.inputField} />
        </div>

        <div className={styles.inputGroup}>
          <TbFileDescriptionFilled className={styles.icone} />
          <textarea placeholder="Sua mensagem" className={styles.textField}></textarea>
        </div>

        <button type="button" className={styles.botaoEnviar}>Enviar</button>
      </form>
    </div>
  );
}
export default Contato;
