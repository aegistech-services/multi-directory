#!/usr/bin/env node

/**
 * Database Connection Test Script
 * This script tests the MySQL database connection and basic functionality
 */

require('dotenv').config();
const mysql = require('mysql2/promise');

async function testDatabaseConnection() {
  console.log('🔍 Testing Database Connection...\n');
  
  // Test configuration
  const config = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'langkawi_directory',
    connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT || '10'),
    acquireTimeout: parseInt(process.env.DB_ACQUIRE_TIMEOUT || '60000'),
    timeout: parseInt(process.env.DB_TIMEOUT || '60000'),
  };
  
  console.log('📋 Configuration:');
  console.log(`   Host: ${config.host}`);
  console.log(`   Port: ${config.port}`);
  console.log(`   User: ${config.user}`);
  console.log(`   Database: ${config.database}`);
  console.log(`   Connection Limit: ${config.connectionLimit}`);
  console.log('');
  
  let connection;
  
  try {
    // Test connection
    console.log('🔌 Attempting to connect...');
    connection = await mysql.createConnection({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
    });
    
    console.log('✅ Connection successful!');
    
    // Test database creation
    console.log('\n🗄️  Testing database creation...');
    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${config.database}`);
    console.log(`✅ Database '${config.database}' ready`);
    
    // Use the database
    await connection.execute(`USE ${config.database}`);
    console.log(`✅ Using database '${config.database}'`);
    
    // Test basic query
    console.log('\n📊 Testing basic query...');
    const [rows] = await connection.execute('SELECT 1 as test');
    console.log('✅ Basic query successful:', rows[0]);
    
    // Test table creation (basic test)
    console.log('\n🏗️  Testing table creation...');
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS test_connection (
        id INT AUTO_INCREMENT PRIMARY KEY,
        message VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Test table created successfully');
    
    // Test insert
    console.log('\n📝 Testing insert operation...');
    const [insertResult] = await connection.execute(
      'INSERT INTO test_connection (message) VALUES (?)',
      ['Database connection test successful!']
    );
    console.log('✅ Insert operation successful, ID:', insertResult.insertId);
    
    // Test select
    console.log('\n🔍 Testing select operation...');
    const [selectRows] = await connection.execute('SELECT * FROM test_connection ORDER BY created_at DESC LIMIT 1');
    console.log('✅ Select operation successful:', selectRows[0]);
    
    // Test update
    console.log('\n✏️  Testing update operation...');
    const [updateResult] = await connection.execute(
      'UPDATE test_connection SET message = ? WHERE id = ?',
      ['Database connection test completed!', insertResult.insertId]
    );
    console.log('✅ Update operation successful, affected rows:', updateResult.affectedRows);
    
    // Test delete
    console.log('\n🗑️  Testing delete operation...');
    const [deleteResult] = await connection.execute(
      'DELETE FROM test_connection WHERE id = ?',
      [insertResult.insertId]
    );
    console.log('✅ Delete operation successful, affected rows:', deleteResult.affectedRows);
    
    // Clean up test table
    await connection.execute('DROP TABLE IF EXISTS test_connection');
    console.log('✅ Test table cleaned up');
    
    console.log('\n🎉 All database tests passed successfully!');
    console.log('\n📋 Database is ready for the Langkawi Directory project.');
    
  } catch (error) {
    console.error('\n❌ Database connection failed:');
    console.error('   Error:', error.message);
    console.error('\n🔧 Troubleshooting tips:');
    console.error('   1. Check if MySQL server is running');
    console.error('   2. Verify database credentials in .env file');
    console.error('   3. Ensure database user has proper permissions');
    console.error('   4. Check firewall settings if connecting remotely');
    
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('\n🔌 Connection closed');
    }
  }
}

// Run the test
testDatabaseConnection().catch(console.error);
