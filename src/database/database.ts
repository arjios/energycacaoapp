import * as open from 'expo-sqlite'

// Abrir conexão com o banco de dados
const openDb = async () => {
    return await (open.openDatabaseAsync('sensores.db'))
};

// Inicializar o banco de dados e criar a tabela se não existir
const initializeDb = async () => {
    const db = await openDb();
    await db.execAsync(`
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
