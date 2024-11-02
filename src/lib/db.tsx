import oracledb from 'oracledb';

async function getConnection() {
    try {
        const connection = await oracledb.getConnection({
            user: 'rm554733',
            password: '251003',
            connectionString: 'oracle.fiap.com.br:1521/ORCL'
        });
        return connection;
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        throw err;
    }
}

export default getConnection;
