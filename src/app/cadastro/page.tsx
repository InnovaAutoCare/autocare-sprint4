'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import axios from 'axios';

import Link from "next/link";
import Image from 'next/image';

import logo from '../../../public/assets/svg/logo.svg';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Cadastro() {
    const router = useRouter();
    const [primeiroNome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [login, setLogin] = useState('');
    const [idade, setIdade] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (senha !== confSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        const nome = `${primeiroNome} ${sobrenome}`;

        const data = {
            nome,
            cpf,
            idade,
            email,
            login,
            senha,
            telefone,
        };

        try {
            const response = await axios.post('http://localhost:8080/cliente', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            if (response.status === 201) {
                sessionStorage.setItem('clienteLogin', login);
                alert("Cadastro realizado com sucesso!");
                router.push(`/cadastroCarro?clienteLogin=${login}`); 
            }
            if (response.status === 400){
                alert("Erro ao buscar login do cliente")
            }
        } catch (error) {
            console.error("Erro ao criar cadastro:", error);
            alert("Ocorreu um erro ao tentar cadastrar.");
        }
    };
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

                <form onSubmit={handleCadastro}>
                    <div className='flex gap-5'>
                        <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Nome</label>
                        <input type="text" placeholder="João" className="inputsForm" value={primeiroNome} onChange={(e) => setNome(e.target.value)} required/>
                        </div>
                        <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Sobrenome</label>
                        <input type="text" placeholder="da Silva" className="inputsForm" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required/>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Nome de usuário</label>
                        <input type="text" placeholder='joao.silva' className="inputsForm" value={login} onChange={(e) => setLogin(e.target.value)} required/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Idade</label>
                        <input type="number" placeholder='25' className="inputsForm" value={idade} onChange={(e) => setIdade(e.target.value)} required/>
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
                            value={cpf}
                            onChange={(e) => {
                                let formattedCpf = e.target.value.replace(/\D/g, "");  
                                formattedCpf = formattedCpf.replace(/(\d{3})(\d)/, "$1.$2"); 
                                formattedCpf = formattedCpf.replace(/(\d{3})(\d)/, "$1.$2"); 
                                formattedCpf = formattedCpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 

                                setCpf(formattedCpf); 
                            }}
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Email</label>
                        <input type="email" placeholder="exemplo@email.com" className="inputsForm" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Telefone</label>
                        <input type="text" placeholder="(11) 99999-9999" className="inputsForm" value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        minLength={11} maxLength={11}/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="idSenha" className={`${inter.className} labelForm`}>Senha</label>
                        <input type="password" id="idSenha" name="txtSenha" placeholder="************" className="inputsForm" value={senha}
                        onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="idConfSenha" className={`${inter.className} labelForm`}>Confirmar Senha</label>
                        <input type="password" id="idConfSenha" name="txtConfSenha" placeholder="************" className="inputsForm" value={confSenha}
                        onChange={(e) => setConfSenha(e.target.value)}/>
                    </div>
                    <button type="submit" className='botao w-full'>CRIAR CONTA</button>
                </form>
            </section>
        </>
    );
}
