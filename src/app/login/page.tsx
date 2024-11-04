"use client";
import Link from "next/link";
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useState } from "react";
import axios from 'axios';

import logo from '../../logo.svg';
import appleIcon from '../../../public/assets/svg/apple-icon.svg';
import googleIcon from '../../../public/assets/svg/google-icon.svg';
import facebookIcon from '../../../public/assets/svg/facebook-icon.svg';
import LoginButton from "@/components/loginButton/LoginButton";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Login() {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/cliente/logar', {
                login,
                senha,
            });

            if (response.data) {
                sessionStorage.setItem('clienteLogin', login);
                router.push('/dashboard');
            } else {
                alert("Login ou senha incorretos!");
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Ocorreu um erro ao tentar fazer login. Tente novamente.");
        }
    };

    return (
        <>
            <section className='container formContainer'>
                <Link href='/'><Image src={logo} alt="Logo Autocare" className='logoForm'/></Link>
                <h3 className={`${inter.className} titleForm`}>Bem-vindo de volta!</h3>
                <p className={`${inter.className} subtitleForm`}>Por favor, insira seus dados de login</p>
                <ul className='flex gap-5 mb-10'>
                    <li><LoginButton img={appleIcon}/></li>
                    <li><LoginButton img={googleIcon}/></li>
                    <li><LoginButton img={facebookIcon}/></li>
                </ul>
                <p className={`${inter.className} text-[#979797] text-center relative mb-10 before:content-[''] before:w-[157px] before:h-[2px] before:bg-[#d9d9d9] before:absolute before:left-0 before:top-2 after:content-[''] after:w-[157px] after:h-[2px] after:bg-[#d9d9d9] after:absolute after:right-0 after:top-2`}>OU</p>
                <form onSubmit={handleLogin}>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Login</label>
                        <input type="text" className="inputsForm" onChange={(e) => setLogin(e.target.value)}/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="idSenha" className={`${inter.className} labelForm`}>Senha</label>
                        <input type="password" name="txtSenha" className="inputsForm pr-10" onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <div className='flex items-center mb-5 justify-between'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className="w-4 h-4 rounded border-1 border-solid border-[#a3a3a3] appearance-none checked:appearance-auto"/>
                            <p className={`${inter.className} text-sm font-semibold`}>Lembrar minha senha</p>
                        </div>
                        <a href="#" className={`${inter.className} block text-sm font-semibold text-corP1 hover:text-[#48a0e9]`}>Esqueci minha senha</a>
                    </div>
                    <button type='submit' className='botao w-full'>LOGIN</button>
                    <p className={`${inter.className} mt-5 text-center`}>Não tem uma conta? <Link href="/cadastro" className={`${inter.className} font-semibold text-corP1 hover:text-[#48a0e9]`}>Criar conta</Link></p>
                </form>
            </section>
        </>
    );
}
