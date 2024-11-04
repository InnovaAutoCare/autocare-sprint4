'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import ClientComponent from '../api/ClientComponent/ClientComponent'; 
import Image from 'next/image';
import axios from 'axios';

import logo from '../../../public/assets/svg/logo.svg';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function CadastroCarro() {
    const router = useRouter();
    const [marca, setMarca] = useState<string>('');
    const [modelo, setModelo] = useState<string>('');
    const [ano, setAno] = useState<number | ''>(''); 
    const [clienteLogin, setClienteLogin] = useState<string | null>(null);
    
    useEffect(() => {
        const login = sessionStorage.getItem('clienteLogin');
        setClienteLogin(login);
        if (!login) {
            router.push('/paginaIndisponivel'); 
        }
    }, [router]);



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!clienteLogin) { 
            console.error("Login do cliente não encontrado.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/carros', {
                login: clienteLogin, 
                carroCliente: {
                    modeloCarro: modelo,
                    marca: marca,
                    anoFabricacao: ano,
                }
            });

            if (response.status === 201) {
                sessionStorage.setItem('clienteLogin', clienteLogin);
                console.log("Carro inserido com sucesso!");
                router.push('/dashboard'); 
            }
        } catch (error) {
            console.error("Erro ao inserir o carro:", error);
        }
    };

    return (
        <ClientComponent>
            <section className='container formContainer'>
                <Image src={logo} alt="Logo AutoCare" className='logoForm' />
                <h3 className={`${inter.className} titleForm`}>Para continuar, vamos cadastrar o seu veículo</h3>
                <p className={`${inter.className} subtitleForm`}>Selecione a marca, modelo e ano do seu veículo</p>
                <form onSubmit={handleSubmit}>
                    <div className='mb-5'>
                        <label className={`${inter.className} labelForm`}>Marca</label>
                        <input type="text" placeholder="Toyota" className="inputsForm" value={marca} onChange={(e) => setMarca(e.target.value)} required/>
                    </div>

                    <div className='mb-5'>
                        <label className={`${inter.className} labelForm`}>Modelo</label>
                        <input type="text" placeholder="Supra" className="inputsForm" value={modelo} onChange={(e) => setModelo(e.target.value)} required/>
                    </div>

                    <div className='mb-5'>
                        <label className={`${inter.className} labelForm`}>Ano</label>
                        <input
                            type="text"
                            placeholder="Ano do veículo"
                            className="inputsForm"
                            value={ano === '' ? '' : ano} 
                            onChange={(e) => setAno(e.target.value ? Number(e.target.value) : '')} 
                            minLength={4}
                            maxLength={4}
                            required
                        />
                    </div>
                    
                    <button type="submit" className='botao w-full'>CONTINUAR</button>
                </form>
            </section>
        </ClientComponent>
    );
}

