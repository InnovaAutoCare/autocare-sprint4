import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

import Image from 'next/image';

import edvanGithub from '../../../public/assets/images/edvan-github.jpg'
import viniciusGithub from '../../../public/assets/images/vinicius-github.jpg'
import rafaelGithub from '../../../public/assets/images/rafael-github.jpg'
import githubIcon from '../../../public/assets/svg/github-icon-footer.svg';

import { Inter } from "next/font/google";
import { CardIntegrante } from '../../components/cardIntegrante/CardIntegrante';
const inter = Inter({ subsets: ["latin"] });

export default function Integrantes() {
    return (
      <>
        <Header/>
        <section className="container">
            <h1 className={`${inter.className} text-5xl sm:text-6xl font-semibold mb-8 text-center`}>Equipe <span className="text-corP1">Auto</span>Care</h1>
            <ul className="my-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
                <li>
                    <CardIntegrante
                        foto={edvanGithub}
                        nome='Edvan Davi'
                        rm='RM554733'
                        turma='Turma TDSPZ'
                        linkGithub='https://github.com/edvxndxvi'
                        linkLinkedin='https://www.linkedin.com/in/edvan-davi-119970236/'
                    />
                </li>
                <li>
                    <CardIntegrante
                        foto={rafaelGithub}
                        nome='Rafael Romanini'
                        rm='RM55463'
                        turma='Turma TDSPZ'
                        linkGithub='https://github.com/rafaelromanini'
                        linkLinkedin='https://www.linkedin.com/in/rafaelromanini/'
                    />
                </li>
                <li>
                    <CardIntegrante
                         foto={viniciusGithub}
                         nome='Vinícius Leandro'
                         rm='RM554728'
                         turma='Turma TDSPY'
                         linkGithub='https://github.com/ViniciusLABernardes'
                         linkLinkedin='https://www.linkedin.com/in/vinicius-leandro-de-araujo-bernardes-765a49254/'
                    />
                </li>
            </ul>
            <a href="https://github.com/InnovaAutoCare/autocare-sprint4" className='bg-corP1 text-branco uppercase py-4 px-8 rounded-lg text-base font-semibold cursor-pointer hover:bg-corP5 hover:text-branco transition-colors flex items-center mx-auto gap-2 max-w-fit' target="_blank">Repositório Git <Image src={githubIcon} alt="Icone GitHub"/></a>
        </section>
        <Footer/>
      </>
    );
  }
  