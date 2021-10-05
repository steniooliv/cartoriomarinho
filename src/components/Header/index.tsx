import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/assets/logo.svg" alt="Cartório Marinho" />
        <nav>
          <a>Serviços</a>
          <a>Quem Somos</a>
          <a>Contato</a>
        </nav>
      </div>
    </header>
  )
}

