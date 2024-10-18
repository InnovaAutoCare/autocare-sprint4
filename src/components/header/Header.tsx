import Link from "next/link";
import Image from 'next/image';

import logoHeader from '../../logo.svg';
import { Roboto } from "next/font/google";
import { MdMenu } from "react-icons/md";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const Header = () => {
    return (
        <header className="max-w-screen-2xl mx-auto">
            <nav className="flex justify-between items-center py-10 px-5">
                <Link href="/">
                    <Image
                        src={logoHeader} 
                        width={130}
                        height={19}
                        alt="Logo AutoCare"
                    />
                </Link>
                <button className="md:hidden">
                    <MdMenu className="size-8 text-corP1"/>
                    </button>
                <ul className="hidden md:flex gap-10 text-sm">
                    <li>
                        <a href="/#sobre-serviço" className={roboto.className}>
                            DIFERENCIAIS
                        </a>
                    </li>
                    <li>
                        <a href="/#como-funciona" className={roboto.className}>
                            COMO FUNCIONA
                        </a>
                    </li>
                    <li>
                        <Link href="/integrantes" className={roboto.className}>
                            QUEM SOMOS NÓS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/login"
                            className={`${roboto.className} text-corP1 p-2 rounded-lg border border-corP1 hover:bg-corP1 hover:text-branco`}
                        >
                            ÁREA DO CLIENTE
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};