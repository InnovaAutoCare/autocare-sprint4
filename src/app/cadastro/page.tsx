import Link from "next/link";
import Image from 'next/image';

import logo from '../../../public/assets/svg/logo.svg';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Cadastro() {
    return (
        <>
            <section className='container formContainer'>
                <div className='mb-10 flex justify-between items-center border-1 border-solid border-corP1 rounded-full'>
                    <p className="bg-corP1 text-branco py-5 px-8 rounded-full">
                        Cadastro cliente
                    </p>
                    <Link href='cadastroOficina'
                        className='pr-4'
                    >
                        Cadastro oficina
                    </Link>
                </div>

                <Link href="/"><Image src={logo} alt="" className='logoForm' /></Link>
                <h3 className={`${inter.className} titleForm`}>Cadastro</h3>
                <p className={`${inter.className} subtitleForm`}>Complete com seus dados para criar sua conta</p>

                <form action="">
                    <div className='flex gap-5'>
                        <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Nome</label>
                        <input type="text" placeholder="João" className="inputsForm"/>
                        </div>
                        <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Sobrenome</label>
                        <input type="text" placeholder="da Silva" className="inputsForm"/>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="idCpf" className={`${inter.className} labelForm`}>CPF</label>
                        <input
                        type="text"
                        id="idCpf"
                        placeholder="XXX.XXX.XXX-XX"
                        required
                        minLength={14}
                        maxLength={14}
                        name="txtCpf"
                        className="inputsForm"
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Email</label>
                        <input type="email" placeholder="exemplo@email.com" className="inputsForm"/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="idSenha" className={`${inter.className} labelForm`}>Senha</label>
                        <input type="password" id="idSenha" name="txtSenha" placeholder="************" className="inputsForm"/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="idConfSenha" className={`${inter.className} labelForm`}>Confirmar Senha</label>
                        <input type="password" id="idConfSenha" name="txtConfSenha" placeholder="************" className="inputsForm"/>
                    </div>
                    <button className='botao w-full'>CRIAR CONTA</button>
                </form>
            </section>
        </>
    );
}
