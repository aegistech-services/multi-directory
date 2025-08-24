import mysql from 'mysql2/promise';

// Database configuration interface
interface DatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  connectionLimit: number;
  acquireTimeout: number;
  timeout: number;
}

// Get database configuration from environment variables
const getDatabaseConfig = (): DatabaseConfig => {
  const isTest = process.env.NODE_ENV === 'test';
  
  return {
    host: isTest ? process.env.TEST_DB_HOST! : process.env.DB_HOST!,
    port: parseInt(isTest ? process.env.TEST_DB_PORT! : process.env.DB_PORT!),
    user: isTest ? process.env.TEST_DB_USER! : process.env.DB_USER!,
    password: isTest ? process.env.TEST_DB_PASSWORD! : process.env.DB_PASSWORD!,
    database: isTest ? process.env.TEST_DB_NAME! : process.env.DB_NAME!,
    connectionLimit: parseInt(isTest ? process.env.TEST_DB_CONNECTION_LIMIT! : process.env.DB_CONNECTION_LIMIT!),
    acquireTimeout: parseInt(isTest ? process.env.TEST_DB_ACQUIRE_TIMEOUT! : process.env.DB_ACQUIRE_TIMEOUT!),
    timeout: parseInt(isTest ? process.env.TEST_DB_TIMEOUT! : process.env.DB_TIMEOUT!),
  };
};

// Create connection pool
const createPool = () => {
  const config = getDatabaseConfig();
  
  return mysql.createPool({
    ...config,
    waitForConnections: true,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });
};

// Export the pool instance
export const db = createPool();

// Export a function to get a new connection (useful for transactions)
export const getConnection = () => db.getConnection();

// Export the configuration for testing purposes
export const getConfig = getDatabaseConfig;

// Test database connection
export const testConnection = async () => {
  try {
    const connection = await db.getConnection();
    console.log('✅ Database connection successful');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
};
