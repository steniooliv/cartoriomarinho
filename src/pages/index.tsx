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
            <img src="/images/b1.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide className={styles['swiper-slide']}>
            <img src="/images/b2.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide className={styles['swiper-slide']}>
            <img src="/images/b3.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide className={styles['swiper-slide']}>
            <img src="/images/b4.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide className={styles['swiper-slide']}>
            <img src="/images/b5.webp" alt="" />
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
          <img src="/images/about.webp" alt="Imagem do Cartório Marinho" />
          <p>
            <p>— Tradição!</p>
            Desde 1883 o Cartório do Segundo Ofício de Notas – “Cartório Marinho” presta serviços ao público na área notarial, com Escrituras Públicas de Compra e Venda, Escritura Pública de Reconhecimento de Paternidade, Escritura Pública de Emancipação, Procurações Públicas, Testamentos Públicos, Testamentos Cerrados, Inventários, Autenticação de Documento, Reconhecimento de Firmas, Atas Notariais, Autenticações Eletrônicas, Autorizações para Viagens entre outros atos notariais. <br />
            Aqui, você é atendido com toda segurança jurídica, por funcionários competentes e qualificados, em um ambiente agradável, com comodidade e com estrutura informatizada.
          </p>
        </div>

        <h2 id="contact">CONTATO</h2>

        <div className={styles.contact}>
          <div className={styles['contact-detail']}>
            <img src="/assets/address.png" alt="Endereço" />
            <h1>Endereço</h1>
            <p>Rua Delfim Moreira, 100 - Centro <br /> Pará de Minas - MG <br /> CEP: 35660-012 </p>
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.532269025872!2d-44.61005668473362!3d-19.859734186643095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa73bf2975dcb35%3A0xfad4fbdfce92379c!2sCART%C3%93RIO%202%C2%B0%20OFICIO%20DE%20NOTAS%20DE%20PAR%C3%81%20DE%20MINAS!5e0!3m2!1spt-BR!2sbr!4v1633453364924!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
        </div>

      </article>

      <footer className={styles.footer}>
        <p>Copyright 2021 - Todos os Direitos Reservados - Developed by <a href="https://www.steniooliv.com">steniooliv</a></p>
      </footer>

    </>
  )
}

export default Home
