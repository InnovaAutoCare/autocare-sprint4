'use client';
import { useEffect, useState } from 'react';
import ClientComponent from './ClienteComponent'; 
import Image from 'next/image';
import axios from 'axios';

import logo from '../../../public/assets/svg/logo.svg';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface Carro {
    modelo: string;
    ano: number;
}

const carros: Record<string, Carro[]> = {
    Toyota: [
        { modelo: 'Corolla', ano: 2015 },
        { modelo: 'Yaris', ano: 2024 },
        { modelo: 'Hilux', ano: 2023 },
    ],
    Honda: [
        { modelo: 'Civic', ano: 2016 },
        { modelo: 'HR-V', ano: 2020 },
    ],
    Chevrolet: [
        { modelo: 'Cruze', ano: 2017 },
    ],
    Ford: [
        { modelo: 'Mustang', ano: 2018 },
        { modelo: 'EcoSport', ano: 2017 },
    ],
    Volkswagen: [
        { modelo: 'Golf', ano: 2019 },
        { modelo: 'T-Cross', ano: 2021 },
    ],
};

export default function CadastroCarro() {
    const [marca, setMarca] = useState<string>('');
    const [modelo, setModelo] = useState<string>('');
    const [ano, setAno] = useState<number | ''>(''); 
    const [modelosDisponiveis, setModelosDisponiveis] = useState<Carro[]>([]);
    const [clienteLogin, setClienteLogin] = useState<string | null>(null);
    
    useEffect(() => {
        const login = sessionStorage.getItem('clienteLogin');
        setClienteLogin(login);
    }, []);

    const handleMarcaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMarca = e.target.value;
        setMarca(selectedMarca);
        setModelo('');
        setAno('');
        
        if (selectedMarca) {
            setModelosDisponiveis(carros[selectedMarca]); 
        } else {
            setModelosDisponiveis([]);
        }
    };

    const handleModeloChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedModelo = e.target.value;
        setModelo(selectedModelo);
        
        const modeloSelecionado = modelosDisponiveis.find(m => m.modelo === selectedModelo);
        if (modeloSelecionado) {
            setAno(modeloSelecionado.ano);
        } else {
            setAno('');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!clienteLogin) { 
            console.error("Login do cliente não encontrado.");
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:8080/carros', {
                login: clienteLogin, 
                carro: {
                    modeloCarro: modelo,
                    marca: marca,
                    ano: ano,
                }
            });

            if (response.status === 200) {
                console.log("Carro inserido com sucesso!");
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
                        <select className="inputsForm" value={marca} onChange={handleMarcaChange} required>
                            <option value="">Selecione a marca</option>
                            {Object.keys(carros).map((marca) => (
                                <option key={marca} value={marca}>{marca}</option>
                            ))}
                        </select>
                    </div>

                    <div className='mb-5'>
                        <label className={`${inter.className} labelForm`}>Modelo</label>
                        <select className="inputsForm" value={modelo} onChange={handleModeloChange} required disabled={!marca}>
                            <option value="">Selecione o modelo</option>
                            {modelosDisponiveis.map((carro) => (
                                <option key={carro.modelo} value={carro.modelo}>{carro.modelo}</option>
                            ))}
                        </select>
                    </div>

                    <div className='mb-5'>
                        <label className={`${inter.className} labelForm`}>Ano</label>
                        <select className="inputsForm" value={ano} onChange={(e) => setAno(Number(e.target.value))} required disabled={!modelo}>
                            <option value="">Selecione o ano</option>
                            {modelosDisponiveis.filter(m => m.modelo === modelo).map((carro) => (
                                <option key={carro.ano} value={carro.ano}>{carro.ano}</option>
                            ))}
                        </select>
                    </div>
                    
                    <button type="submit" className='botao w-full'>CONTINUAR</button>
                </form>
            </section>
        </ClientComponent>
    );
}

