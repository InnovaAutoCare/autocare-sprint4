import Link from "next/link";
import Image from 'next/image';

import logo from '../../../public/assets/svg/logo.svg';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function CadastroParceiros() {
    return (
        <>
            <section className='container formContainer'>
                <div className='mb-10 flex justify-between items-center border-1 border-solid border-corP1 rounded-full'>
                    <Link href='cadastro' className="pl-4">
                        Cadastro cliente
                    </Link>
                    <p
                        className='bg-corP1 text-branco py-5 px-8 rounded-full'
                    >
                        Cadastro oficina
                    </p>
                </div>

                <Link href="/"><Image src={logo} alt="" className='logoForm' /></Link>
                <h3 className={`${inter.className} titleForm`}>Cadastro</h3>
                <p className={`${inter.className} subtitleForm`}>Complete com seus dados para criar sua conta</p>

                <form action="">
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Nome Fantasia</label>
                        <input type="text" placeholder="ConsertosMax" className="inputsForm" />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="idCnpj" className={`${inter.className} labelForm`}>CNPJ</label>
                        <input
                        type="text"
                        id="idCnpj"
                        placeholder="XX.XXX.XXX/0001-XX"
                        required
                        minLength={18}
                        maxLength={18}
                        name="txtCnpj"
                        className="inputsForm"
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Email</label>
                        <input type="email" id="idEmail" placeholder="exemplo@email.com" className="inputsForm"/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="idSenhaLoja" className={`${inter.className} labelForm`}>Senha</label>
                        <input type="password" id="idSenhaLoja" name="txtSenhaLoja" placeholder="************" className="inputsForm"/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="idConfSenhaLoja" className={`${inter.className} labelForm`}>Confirmar senha</label>
                        <input type="password" id="idConfSenhaLoja" name="txtConfSenhaLoja" placeholder="************" className="inputsForm"/>
                    </div>
                    <button className='botao w-full'>CRIAR CONTA</button>
                </form>
            </section>
        </>
    );
}
