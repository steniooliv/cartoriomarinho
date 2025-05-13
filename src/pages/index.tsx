import type { NextPage } from 'next';
import { Swiper, SwiperSlide } from "swiper/react";
import Head from 'next/head';

import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

SwiperCore.use([Autoplay,Pagination,Navigation]);

import ServicesCard from '../components/ServicesCard';

import styles from '../styles/home.module.scss';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import data from '../services/data.json';

const Home: NextPage = () => {
  const items = data.items;

  return (
    <>
      <Head>
        <title>Cartório Marinho - Cartório 2º Ofício de Notas</title>
      </Head>

      <div className={styles.banner}>
        <Swiper
          observer={true}
          observeParents={true}
          parallax={true}
          slidesPerView={1}
          loop={true}
          autoplay={{"delay": 3000, "disableOnInteraction": false }}
          simulateTouch={true}
          pagination={{"clickable": true}}
          navigation={true}
        >
          <SwiperSlide className={styles['swiper-slide']}>
            <img src="/images/b1.png" alt="" />
          </SwiperSlide>

          <SwiperSlide className={styles['swiper-slide']}>
            <img src="/images/b2.png" alt="" />
          </SwiperSlide>

          <SwiperSlide className={styles['swiper-slide']}>
            <img src="/images/b3.png" alt="" />
          </SwiperSlide>

          <SwiperSlide className={styles['swiper-slide']}>
            <img src="/images/b4.png" alt="" />
          </SwiperSlide>

          <SwiperSlide className={styles['swiper-slide']}>
            <img src="/images/b5.png" alt="" />
          </SwiperSlide>

        </Swiper>
      </div>

      <article className={styles.article}>

        <h2 id="services">SERVIÇOS</h2>

        <div className={styles.services}>
          {items.map(e => (
            <ServicesCard key={items.indexOf(e)} index={items.indexOf(e)} icon={e.icon} title={e.title} description={e.description} />
          ))
          }
        </div>

        <h2 id="about">QUEM SOMOS</h2>

        <div className={styles.about}>
          <img src="/images/about.png" alt="Imagem do Cartório Marinho" />
          <p>
            Desde 1883 o Cartório do Segundo Ofício de Notas – “Cartório Marinho” presta serviços ao público na área notarial, com Escrituras Públicas de Compra e Venda, Escritura Pública de Reconhecimento de Paternidade, Escritura Pública de Emancipação, Procurações Públicas, Testamentos Públicos, Testamentos Cerrados, Inventários, Autenticação de Documento, Reconhecimento de Firmas, Atas Notariais, Autenticações Eletrônicas, Autorizações para Viagens entre outros atos notariais. <br />
            Aqui, você é atendido com toda segurança jurídica, por funcionários competentes e qualificados, em um ambiente agradável, com comodidade e com estrutura informatizada.
          </p>
        </div>

        <h2 id="contact">CONTATO</h2>

        <div className={styles.contact}>
          <div className={styles['contact-detail']}>
            <img src="/assets/address.png" alt="Endereço" />
            <h1>Endereço</h1>
            <p>Rua Manoel Batista, 149 - Centro <br /> Pará de Minas - MG <br /> CEP: 35660-049 </p>
          </div>

          <div className={styles['contact-detail']}>
            <img src="/assets/phone.png" alt="Telefone" />
            <h1>Telefone</h1>
            <p>(37) 3232-1101 <br/> (37) 3231-4780 </p>
          </div>

          <div className={styles['contact-detail']}>
            <img src="/assets/email.png" alt="E-mail" />
            <h1>E-mail</h1>
            <p>contato@cartoriomarinho.com.br <br/> cartoriomarinhopm@gmail.com</p>
          </div>

          <div className={styles['contact-detail']}>
            <img src="/assets/whatsapp.png" alt="WhatsApp" />
            <h1>WhatsApp</h1>
            <p>Escritura/Procuração <br /> (37) 99975-4848 <br/> Reconhecimento/Autenticação <br/> (37) 99975-1013  </p>
          </div>

        </div>
        
        <div className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.54659529597!2d-44.61018678942158!3d-19.859128581436334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa73bf2dc18f0cf%3A0xd80655bd6407c9df!2sR.%20Manoel%20Batista%2C%20149%20-%20Centro%2C%20Par%C3%A1%20de%20Minas%20-%20MG%2C%2035660-049!5e0!3m2!1spt-BR!2sbr!4v1742558877099!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
        </div>

      </article>

      <footer className={styles.footer}>
        <p>Copyright 2025 - Todos os Direitos Reservados - Developed by <a href="https://www.steniooliv.com">steniooliv</a></p>
      </footer>

    </>
  )
}

export default Home
