'use client';
import { useEffect } from 'react';
import ClientComponent from '../api/ClientComponent/ClientComponent'; 
import { useRouter } from 'next/navigation'; 

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
            <h1 className="text-3xl font-bold underline">Dashboard</h1>
        </ClientComponent>
    );
}