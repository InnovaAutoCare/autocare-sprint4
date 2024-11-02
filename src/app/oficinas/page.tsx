'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/assets/svg/logo.svg';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface Oficina {
    id_oficina: number; 
    nome_oficina: string; 
    cnpj: number;
    horario_funcionamento: string;
    data_abertura: Date;
}

const Oficinas = () => {
    const [oficinas, setOficinas] = useState<Oficina[]>([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        const fetchOficinas = async () => {
            setLoading(true); 
            try {
                const response = await fetch('/api/oficina');
                if (!response.ok) {
                    throw new Error('Erro ao buscar oficinas');
                }
                const data: Oficina[] = await response.json();
                setOficinas(data);
                setError(null); 
            } catch (error) {
                console.error('Erro:', error);
                setError(error instanceof Error ? error.message : 'Erro desconhecido'); 
            } finally {
                setLoading(false); 
            }
        };

        fetchOficinas();
    }, []);

    return (
        <section className='container'>
            <Link href="/"><Image src={logo} alt="" className='logoForm' /></Link>
            <h1 className={`${inter.className} text-5xl sm:text-6xl font-semibold mb-8`}>Oficinas</h1>
            {loading && <p>Carregando...</p>} 
            {error && <p style={{ color: 'red' }}>{error}</p>} 
            <ul>
                {oficinas.length > 0 ? (
                    oficinas.map((oficina) => (
                        <li key={oficina.id_oficina} className='text mb-4 '>
                            {oficina.nome_oficina} |
                            {oficina.cnpj} | 
                            {oficina.horario_funcionamento}
                        </li>
                    ))
                ) : (
                    <li>Nenhuma oficina encontrada</li>
                )}
            </ul>
        </section>
    );
};

export default Oficinas;
