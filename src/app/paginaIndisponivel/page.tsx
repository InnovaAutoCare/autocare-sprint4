import Link from "next/link";

import Image from 'next/image';

import logo from '../../../public/assets/svg/logo.svg';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function PaginaIndisponivel() {
    return (
        <div className="container text-center">
            <Image src={logo} alt="Logo AutoCare" className='logoForm' />
            <h1 className={`${inter.className} text-5xl text-center mb-2`}>Página indisponível!</h1>
            <p className={`${inter.className} subtitleForm`}>Por favor, faça o login para continuar.</p>
            <Link href='/login' className="text-center">Voltar para página de login</Link>
        </div>
    );
}
