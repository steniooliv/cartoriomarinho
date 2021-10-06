import styles from './styles.module.scss';

interface Props {
  icon: string,
  title: string,
  description: string
}

export default function ServicesCard(props : Props) {
   return (
    <div className={styles.cardContent}>
      <img src={props.icon} alt="" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}
