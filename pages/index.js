import Head from 'next/head'
import Link from 'next/link'
import BudgetCard from '../components/budgetCard'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi'
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import { MdMenu, MdCheck, MdClose } from 'react-icons/md'
import { ImWhatsapp } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'
import { FiThumbsUp } from 'react-icons/fi'
import { useState } from 'react'

const Container = ({ children }) => <div className="custom-container">{children}</div>

const MobileNav = ({ close }) => (
  <div className="fixed top-0 left-0 h-full bg-white md:hidden" style={{ width: '80%' }}>
    <MdClose className="absolute top-0 right-0 text-2xl text-gray-800" onClick={close} />
    <nav className="px-4 py-6">
      <ul className="flex flex-col gap-4 font-medium text-lg text-gray-700">
        <li className="text-primary text-bold"><Link href="#">Home</Link></li>
        <li><Link href="#">Serviços</Link></li>
        <li><Link href="#">Contatos</Link></li>
        <li><Link href="#">Quem somos</Link></li>
        <li><Link href="#">Blog</Link></li>
      </ul>
    </nav>
  </div>
)

const Gallery = () => (
  <div className="grid gap-4 bg-primary md:grid-cols-4">
    <div className="w-full h-full">
      <img src="/images/gallery-1.jpg" className="object-fit" />
    </div>
    <div>
      <img src="/images/gallery-2.jpg" />
    </div>
    <div>
      <img src="/images/gallery-3.jpg" />
    </div>
    <div>
      <img src="/images/gallery-4.jpg" />
    </div>
    <div className="w-full h-full">
      <img src="/images/gallery-5.jpg" className="object-fit" />
    </div>
    <div>
      <img src="/images/gallery-6.jpg" />
    </div>
    <div>
      <img src="/images/gallery-7.jpg" />
    </div>
    <div>
      <img src="/images/gallery-8.jpg" />
    </div>
    <div>
      <img src="/images/gallery-9.jpg" />
    </div>
    <div>
      <img src="/images/gallery-11.jpg" />
    </div>
    <div>
      <img src="/images/gallery-12.jpg" />
    </div>
    <div>
      <img src="/images/gallery-10.jpg" />
    </div>
  </div>
)

const Header = ({ open }) => (
  <header>
    <div className="py-5 bg-primary md:py-2">
      <Container>
        <div className="flex flex-col gap-6 text-white lg:flex-row lg:justify-between lg:items-center">              
          <ul className="flex gap-4 items-center text-xl">
            <li className="bg-white rounded-full p-2 bg-primary-dark">
              <a href="https://www.instagram.com/br.inoxoficial/" target="_blank"><FaInstagram /></a>
            </li>
            <li className="bg-white rounded-full p-2 bg-primary-dark">
              <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
            </li>
            <li className="bg-white rounded-full p-2 bg-primary-dark">
              <a href="https://youtube.com" target="_blank"><FaYoutube /></a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <li className="flex items-center gap-3">
              <ImWhatsapp className="text-2xl" />
              <div className="flex flex-col">
                <span className="font-bold">Whatsapp</span>
                <span className="-mt-1">(85) 98880-5666</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineMail className="text-2xl" />
              <div className="flex flex-col">
                <span className="font-bold">Email</span>
                <span className="-mt-1">martonio.inox@gmail.com</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <HiLocationMarker className="text-2xl" />
              <div className="flex flex-col">
                <span className="font-bold">Endereço</span>
                <span className="-mt-1">Rua Leonel Chaves 462 - Parangaba</span>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </div>

    <div className="py-3 bg-gray-900">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/"><a><img src="/images/logo.png" width="110" /></a></Link>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-5 font-medium text-lg text-gray-50">
              <li className="text-primary text-bold"><Link href="#">Home</Link></li> <span className="text-gray-500">|</span>
              <li><Link href="#">Serviços</Link></li> <span className="text-gray-500">|</span>
              <li><Link href="#">Contatos</Link></li> <span className="text-gray-500">|</span>
              <li><Link href="#">Quem somos</Link></li> <span className="text-gray-500">|</span>
              <li><Link href="#">Blog</Link></li> <span className="text-gray-500">|</span>
              <button className="bg-primary text-white rounded px-4 py-2 ml-1 font-medium">Fazer Orçamento</button>
            </ul>
          </nav>
          <MdMenu className="text-2xl lg:hidden text-white" onClick={open} />
        </div>
      </Container>
    </div>

    <style jsx>{`
      nav ul li {
        transition: color 0.1s ease-in;
      }
      nav ul li:hover {
        color: #ac0000;
      }
    `}</style>
  </header>
)

const HeroSection = () => (
  <section className="hero py-12 bg-gray-200">
    <Container>
      <div className="flex flex-col gap-x-4 gap-y-8 lg:flex-row lg:gap-0 lg:items-center lg:gap-x-10">
        <div className="col">
          <Zoom top>
            <h1 className="flex flex-col">
              <span className="flex flex-col gap-x-4 font-bold text-2xl text-primary tracking-widest lg:flex-row lg:items-center">
                <p><span className="text-gray-700">METALÚRGICA</span> BRINOX</p>
                <ul className="flex gap-1">
                  <li><AiFillStar /></li>
                  <li><AiFillStar /></li>
                  <li><AiFillStar /></li>
                  <li><AiFillStar /></li>
                  <li><AiFillStar /></li>
                </ul>
              </span>
              <span className="font-bold text-6xl text-gray-800 lg:text-8xl">Tudo Em <span className="text-primary">Aço</span> Inox</span>
            </h1>
          </Zoom>
          <Fade left>
            <p className="mt-5 font-medium xl:pr-16">
              Entregamos para todo territorio nacional. Seja com a nossa frota de caminhões
              ou de avião.
            </p>
          </Fade>

          <div className="flex flex-col gap-2 mt-6 md:pr-2 md:flex-row">
            <button className="bg-primary w-full rounded px-8 py-2 text-white font-medium transition-all hover:opacity-80 md:w-auto">
              Serviços
            </button>
            <button className="bg-primary-dark w-full rounded px-4 py-2 text-white font-medium transition-all hover:opacity-80 md:w-auto">
              Quem somos ?
            </button>
          </div>
        </div>

        <div className="col">
          <BudgetCard theme="dark" />
        </div>
      </div>
    </Container>

    <style jsx>{`
      .hero {
        background-image: linear-gradient(
          to right bottom,
          rgba(255,255,255,0.9),
          rgba(255,255,255,0.7)),
          url('/images/bg-about.jpg'
        );
        background-position: center;
      }

      .col {
        flex-basis: 100%;
      }
    `}</style>
  </section>
)

const About = () => (
  <div className="about py-14 text-white">
    <Container>
      <div className="flex flex-col gap-10 md:flex-row md:items-center">           
        <div className="col">
          <Fade left>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Quem Somos ?
            </h2>
          </Fade>
          <Zoom>
            <h3 className="text-2xl font-medium mb-4">
              A <span className="text-primary">BRINOX</span> Oferece os Melhores Serviços de Aço Inox do Brasil
            </h3>
          </Zoom>
          <Zoom top>
            <p className="text-justify">
              Desde 1998, a <span className="text-primary font-medium">BRINOX</span> vem proporcionando soluções inovadoras em inox aos seus clientes, contando com a maior diversidade de produtos, linha completa para hospitais, cozinhas industriais até produtos de acessibilidade ou peças projetadas. Sempre visando o menor preço e a máxima qualidade que você, nosso cliente merece.
            </p>
          </Zoom>
        </div>
        <div className="col">
          <img src="/images/entrega.jpg" className="rounded" />
        </div>
      </div>
    </Container>

    <style jsx>{`
      .about {
        background-image: linear-gradient(
          to right bottom,
          rgba(0,0,0,0.9),
          rgba(0,0,0,0.8)),
          url('/images/bg-about-2.jpg'
        );
        background-size: cover;
        background-position: center;
      }
      
      .col {
        flex-basis: 100%;
      }
    `}</style>
  </div>
)

const Features = () => (
  <section className="bg-primary-dark py-16">
    <Container>
      <div className="grid gap-4 md:grid-cols-3">
        <Fade top>
          <div className="flex flex-col text-gray-100 items-center p-4 rounded gap-3">
            <AiFillStar className="text-9xl" />
            <h3 className="font-medium text-2xl">Tradição</h3>
            <p className="text-center">
              A BRINOX atua no mercado de inox há mais de 23 anos. Atendendo clientes por todo Brasil.
            </p>
          </div>
        </Fade>
        <div className="flex flex-col items-center p-4 text-gray-100 rounded gap-3 transform md:-translate-y-7">
          <FiThumbsUp className="text-9xl" />
          <h3 className="font-medium text-2xl">Confiança</h3>
          <p className="text-center mt-2">
            Somos requisitados por empresas gigantes pela a confiança
            no nosso atendimento, qualidade e prazo de entrega.
          </p>
        </div>
        <Fade top>
          <div className="flex flex-col items-center p-4 text-gray-100 rounded gap-3">
            <MdCheck className="text-9xl" />
            <h3 className="font-medium text-2xl">Qualidade</h3>
            <p className="text-center mt-2">
              A qualidade de nossos produtos é inigualável. Pois, usamos da melhor obra prima
              e temos os melhores profissionais.
            </p>
          </div>
        </Fade>
      </div>
    </Container>
  </section>
)

const OurServices = () => (
  <section className="our-services py-24 bg-gray-900 relative overflow-hidden">
    <Container>
      <div>
        <Fade left>
          <h2 className="text-center text-4xl font-bold text-gray-50">
            Alguns de Nossos Serviços
          </h2>
        </Fade>
        <div className="grid gap-4 gap-y-10 mt-14 md:grid-cols-4">
          <div className="text-center transition-all transform hover:-translate-y-4">
            <img src="/images/gallery-3.jpg" />
            <h3 className="mt-7 text-gray-100 font-medium text-lg">Artigos Hospitalares</h3>
          </div>
          <div className="text-center transition-all transform hover:-translate-y-4">
            <img src="/images/gallery-12.jpg" />
            <h3 className="mt-7 text-gray-100 font-medium text-lg">Cozinhas Profissionais</h3>
          </div>
          <div className="text-center transition-all transform hover:-translate-y-4">
            <img src="/images/gallery-4.jpg" />
            <h3 className="mt-7 text-gray-100 font-medium text-lg">Móveis Projetados</h3>
          </div>

          <div className="text-center transition-all transform hover:-translate-y-4">
            <img src="/images/gallery-8.jpg" />
            <h3 className="mt-7 text-gray-100 font-medium text-lg">Letreiros em Inox</h3>
          </div>
        </div>
      </div>
    </Container>

    <style jsx>{`
      .our-services::before {
        content: "";
        position: absolute;
        top: -60px;
        left: -50px;
        background-color: #660000;
        width: 130px;
        height: 130px;
        border-radius: 999px;
        z-index: 100;
      }
      .our-services::after {
        content: "";
        position: absolute;
        top: -60px;
        right: -50px;
        background-color: #660000;
        width: 130px;
        height: 130px;
        border-radius: 999px;
        z-index: 100;
      }

      @media only screen and (min-width: 768px) {
        .our-services::before {
          width: 180px;
          height: 180px;
        }
        .our-services::after {
          width: 180px;
          height: 180px;
        }
      }
    `}</style>
  </section>
)

const Contact = () => (
  <div className="py-20 bg-gray-900">
    <Container>
      <Fade top>
        <h2 className="text-center text-3xl mb-10 font-bold text-gray-50">Fale Conosco</h2>
      </Fade>
      <div className="grid gap-y-6 gap-x-3 md:grid-cols-3">
        <div className="text-center bg-primary rounded flex flex-col items-center gap-3 text-white p-14 transition-all transform hover:-translate-y-4">
          <ImWhatsapp className="text-6xl" />
          (85) 98880-5666
        </div>
        <div className="text-center bg-primary-dark rounded flex flex-col items-center gap-3 text-white py-14 transition-all transform hover:-translate-y-4">
          <HiOutlineMail className="text-6xl" />
          martonio.inox@gmail.com
        </div>
        <div className="text-center bg-primary rounded flex flex-col items-center gap-3 text-white py-14 transition-all transform hover:-translate-y-4">
          <HiLocationMarker className="text-6xl" />
          Rua Leonel Chaves 462 - Parangaba
        </div>
      </div>
    </Container>
  </div>
)

const OurClients = () => (
  <div className="py-20">
    <Container>
      <Bounce top>
        <h2 className="text-center text-4xl font-bold mb-6">
          Nossos Clientes
        </h2>
      </Bounce>
      <div className="grid gap-2 md:grid-cols-4">
        <div className="text-center transition-all hover:opacity-80">
          <img src="https://imgr.search.brave.com/WwsRPYMAU1YXDj7BsGPhgjD7dtGoQhxUXk36YKuuDRE/fit/1040/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/NjIyc1NWUjVWZ0Zq/cTk0UU9RNUdnSGFE/WSZwaWQ9QXBp" />
        </div>
        <div className="text-center transition-all hover:opacity-80">
          <img src="https://imgr.search.brave.com/WwsRPYMAU1YXDj7BsGPhgjD7dtGoQhxUXk36YKuuDRE/fit/1040/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/NjIyc1NWUjVWZ0Zq/cTk0UU9RNUdnSGFE/WSZwaWQ9QXBp" />
        </div>
        <div className="text-center transition-all hover:opacity-80">
          <img src="https://imgr.search.brave.com/WwsRPYMAU1YXDj7BsGPhgjD7dtGoQhxUXk36YKuuDRE/fit/1040/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/NjIyc1NWUjVWZ0Zq/cTk0UU9RNUdnSGFE/WSZwaWQ9QXBp" />
        </div>
        <div className="text-center transition-all hover:opacity-80">
          <img src="https://imgr.search.brave.com/WwsRPYMAU1YXDj7BsGPhgjD7dtGoQhxUXk36YKuuDRE/fit/1040/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/NjIyc1NWUjVWZ0Zq/cTk0UU9RNUdnSGFE/WSZwaWQ9QXBp" />
        </div>
      </div>
    </Container>

    <style jsx>{`
      h2 {
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        background-image: linear-gradient(to right, rgb(17, 24, 39), #e60000);
      }
    `}</style>
  </div>  
)

const Footer = () => (
  <footer className="bg-gray-900">
    <Container>
      <div className="py-16">
        <div className="flex flex-col items-center gap-y-6">
          <Link href="/"><a><img src="/images/logo.png" width="250" /></a></Link>
          <BudgetCard width="md:w-1/2" />
        </div>
        
        <div className="flex flex-col gap-6 text-white mt-10">
          <ul className="flex gap-4 items-center text-xl">
            <li className="bg-white rounded-full p-2 bg-primary-dark">
              <a href="https://www.instagram.com/br.inoxoficial/" target="_blank"><FaInstagram /></a>
            </li>
            <li className="bg-white rounded-full p-2 bg-primary-dark">
              <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
            </li>
            <li className="bg-white rounded-full p-2 bg-primary-dark">
              <a href="https://youtube.com" target="_blank"><FaYoutube /></a>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <li className="flex items-center gap-3">
              <ImWhatsapp className="text-2xl" />
              <div className="flex flex-col">
                <span className="font-bold">Whatsapp</span>
                <span className="-mt-1">(85) 98880-5666</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineMail className="text-2xl" />
              <div className="flex flex-col">
                <span className="font-bold">Email</span>
                <span className="-mt-1">martonio.inox@gmail.com</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <HiLocationMarker className="text-2xl" />
              <div className="flex flex-col">
                <span className="font-bold">Endereço</span>
                <span className="-mt-1">Rua Leonel Chaves 462 - Parangaba / Fortaleza Ceará</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>

    <div className="bg-primary-dark text-center text-white text-sm py-2 font-medium">
      <Container>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span>© Todos os direitos reservados BRINOX 2021</span>
          <span>Feito com muito &#10084; por Caio Nobre</span>
        </div>
      </Container>
    </div>
  </footer>
)

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    setIsOpen(true)
    document.body.style.overflowY = 'hidden'
  }

  const close = () => {
    setIsOpen(false)
    document.body.style.overflowY = 'auto'
  }
  
  return (
    <div>
      <Head>
        <title>METALÚRGICA BRINOX Tudo Em Aço Inox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src='https://llwhatsapp.blob.core.windows.net/whatschat-scripts/whatschat-fc244105acd042eabcddc36461dae3e4.js'></script>
      </Head>

      <Header open={open} close={close} />

      <HeroSection />

      <Features />

      <OurServices />

      <About />

      <Contact />

      <Gallery />

      <OurClients />

      <Footer />

      {isOpen && <MobileNav close={close} />}
    </div>
  )
}