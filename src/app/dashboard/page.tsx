'use client';

import { LateralNav } from "@/components/lateralNav/LateralNav";

import { useEffect } from 'react';
import ClientComponent from '../api/ClientComponent/ClientComponent'; 
import { useRouter } from 'next/navigation'; 

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export default function Dashboard() {
    const router = useRouter();
    useEffect(() => {
        const login = sessionStorage.getItem('clienteLogin');
        if (!login) {
            router.push('/paginaIndisponivel'); 
        }
    }, [router]);

    return (
        <ClientComponent>
            <section className="flex">
                <LateralNav></LateralNav>
                <div className="px-8 w-full self-center">
                    <h1 className={`${inter.className} text-5xl font-semibold mb-8 text-center`}>Bem vindo ao seu Dashboard Auto<span className="text-corP1">Care</span>!</h1>
                </div>
            </section>
        </ClientComponent>
    );
}