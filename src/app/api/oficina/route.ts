import getConnection from '../../../lib/db'; 
import { NextResponse } from 'next/server';

interface Oficina {
    id_oficina: number; 
    nome_oficina: string; 
    cnpj: string; // Mude para string se o CNPJ for armazenado como texto
    horario_funcionamento: string;
    data_abertura: Date;
}


export async function GET() {
    let connection;
    try {
        connection = await getConnection();
        const result = await connection.execute('SELECT * FROM TB_OFICINA');
        if (!result || !result.rows) {
            throw new Error('Resultado inválido da consulta');
        }

        const oficinas: Oficina[] = result.rows ? (result.rows as unknown as [number, string, string, string, Date][])
            .map(row => ({
                    id_oficina: row[0],
                    nome_oficina: row[1],
                    cnpj: row[2],
                    horario_funcionamento: row[3],
                    data_abertura: new Date(row[4]), 
                })) : [];

        return NextResponse.json(oficinas);
    } catch (err) {
        console.error('Erro ao consultar tb_oficinas:', err);
        return NextResponse.json({ error: 'Erro ao consultar as oficinas' }, { status: 500 });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Erro ao fechar a conexão:', err);
            }
        }
    }
}