import { NextPage } from "next";

import styles from './styles.module.scss';

const Header: NextPage = () => {
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

export default Header;