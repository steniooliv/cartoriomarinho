import ReactModal from "react-modal";
import { ModalProps } from "../../@types";

import styles from './styles.module.scss';

import data from '../../services/data.json';

export default function Modal({id, isOpen, handleClose}: ModalProps) {

  const description = data.items[id].description.split("\r\n", 50000);

  return (
    <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        className={styles['react-modal-content']}
        overlayClassName={styles['react-modal-overlay']}
        bodyOpenClassName={styles['react-modal-body-open']}
    >
      <header className={styles.header}>
        <a onClick={handleClose}>
          <img src="/assets/close.png" alt="Fechar" />
        </a>
      </header>

      <article>
        <div className={styles.cardContent}>
          <img src={data.items[id].icon} alt="" />
          <h1>{data.items[id].title}</h1>
          {
            description.map(p =>(
              <p>{p}<br/><br/></p>
            ))
          }
        </div>
      </article>
    </ReactModal>
  )
}