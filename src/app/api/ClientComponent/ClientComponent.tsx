
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientComponent({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const clienteLogin = sessionStorage.getItem('clienteLogin');
        if (!clienteLogin) {
            router.push('/paginaIndisponivel'); 
        }
    }, [router]);

    return <>{children}</>;
}