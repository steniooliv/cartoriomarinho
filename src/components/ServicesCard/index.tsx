import { useState } from 'react';
import Modal from '../Modal';
import styles from './styles.module.scss';

interface Props {
  index: number
  icon: string,
  title: string,
  description: string
}

export default function ServicesCard(props: Props) {

  const [isOpen, setIsOpen] = useState(false);

  function handleModalOpen() {
    setIsOpen(true);
  }

  function handleModalClose() {
    setIsOpen(false);
  }


  return (
    <>
      <div className={styles.cardContent}>
        <img src={props.icon} alt="" />
        <h1>{props.title}</h1>
        <p>
          {
            props.description.length > 300
            ?
              props.description.substring(0, 300) + '... '
          
            :
              props.description
          }
          <a onClick={handleModalOpen}>Saiba mais</a>
        </p>
      </div>

      <Modal key={props.index} id={props.index} isOpen={isOpen} handleClose={handleModalClose} />
    </>
  )
}

