import sql from 'sqlite3';
import { open } from 'sqlite';

// Abrir conexão com o banco de dados
const openDb = async () => {
    return await open({
        filename: 'c:/ws-cepedi/energycacao/data/sensores.db',
        driver: sql.Database
    });
};

// Inicializar o banco de dados e criar a tabela se não existir
const initializeDb = async () => {
    const db = await openDb();
    await db.exec(`
        CREATE TABLE IF NOT EXISTS sensor_data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            topico TEXT,
            nome TEXT,
            medida REAL,
            unidade CHAR(10),
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
    return db
};

export { initializeDb };
