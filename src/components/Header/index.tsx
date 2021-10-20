import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/assets/logo.svg" alt="Cartório Marinho" />
        <nav>
          <a href="#services">Serviços</a>
          <a href="#about">Quem Somos</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  )
}

