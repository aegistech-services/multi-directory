# Database Setup Guide - Langkawi Directory

This guide will help you set up the MySQL database for the Langkawi Directory project.

## 🗄️ Prerequisites

- MySQL 8.0+ or MariaDB 10.5+
- Node.js 18+ with npm
- Access to create databases and users

## 📋 Environment Configuration

1. **Copy the environment sample file:**
   ```bash
   cp ../env.sample .env
   ```

2. **Update the `.env` file with your MySQL credentials:**
   ```env
   # Database Configuration
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=langkawi_directory
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_CONNECTION_LIMIT=10
   DB_ACQUIRE_TIMEOUT=60000
   DB_TIMEOUT=60000
   ```

3. **For testing, also configure the test database:**
   ```env
   # Test Database Configuration
   TEST_DB_HOST=localhost
   TEST_DB_PORT=3306
   TEST_DB_NAME=langkawi_directory_test
   TEST_DB_USER=test_user
   TEST_DB_PASSWORD=test_password_123
   TEST_DB_CONNECTION_LIMIT=5
   TEST_DB_ACQUIRE_TIMEOUT=30000
   TEST_DB_TIMEOUT=30000
   ```

## 🚀 Quick Setup

### Option 1: Automated Setup (Recommended)

Run the database test script to automatically create the database and test the connection:

```bash
node scripts/test-db.js
```

This script will:
- Test the database connection
- Create the database if it doesn't exist
- Test basic CRUD operations
- Clean up test data

### Option 2: Manual Setup

1. **Connect to MySQL:**
   ```bash
   mysql -u root -p
   ```

2. **Create the database:**
   ```sql
   CREATE DATABASE langkawi_directory;
   CREATE DATABASE langkawi_directory_test;
   ```

3. **Create a user (optional but recommended):**
   ```sql
   CREATE USER 'langkawi_user'@'localhost' IDENTIFIED BY 'your_secure_password';
   GRANT ALL PRIVILEGES ON langkawi_directory.* TO 'langkawi_user'@'localhost';
   GRANT ALL PRIVILEGES ON langkawi_directory_test.* TO 'langkawi_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

4. **Run the schema file:**
   ```bash
   mysql -u your_username -p langkawi_directory < lib/schema.sql
   ```

## 🧪 Testing the Connection

### Test Database Connection
```bash
node scripts/test-db.js
```

### Test from Node.js
```javascript
import { testConnection } from './lib/db';

// Test the connection
const isConnected = await testConnection();
console.log('Database connected:', isConnected);
```

## 📊 Database Schema

The project includes a comprehensive database schema with the following tables:

- **users** - User authentication and basic information
- **user_profiles** - Extended user profile data
- **business_listings** - Business directory listings
- **business_gallery** - Business images and documents
- **job_postings** - Job opportunities
- **service_listings** - Freelancer services
- **inquiries** - Contact form submissions
- **promotions** - Featured content and banners
- **subscription_plans** - Available subscription tiers
- **user_subscriptions** - User subscription status
- **bookmarks** - User saved items
- **admin_logs** - Administrative audit trail

## 🔐 Security Features

- **Password Hashing**: Uses bcrypt with configurable salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Role-Based Access Control**: Granular permissions per user role
- **SQL Injection Protection**: Parameterized queries with mysql2
- **Audit Logging**: Comprehensive logging of administrative actions

## 🚨 Troubleshooting

### Common Issues

1. **Connection Refused**
   - Ensure MySQL service is running
   - Check if the port is correct (default: 3306)
   - Verify firewall settings

2. **Access Denied**
   - Check username and password
   - Ensure user has proper permissions
   - Verify host restrictions

3. **Database Not Found**
   - Create the database manually
   - Check database name spelling
   - Ensure user has CREATE privileges

4. **Timeout Issues**
   - Increase timeout values in .env
   - Check network latency
   - Verify MySQL configuration

### Debug Mode

Enable debug logging by setting:
```env
LOG_LEVEL=debug
```

## 📚 Next Steps

After successful database setup:

1. **Run the schema migration** to create all tables
2. **Test the authentication system** with JWT tokens
3. **Create your first admin user** using the default credentials
4. **Set up the frontend components** with shadcn/ui
5. **Implement the API endpoints** for CRUD operations

## 🔗 Related Files

- `lib/db.ts` - Database connection and configuration
- `lib/auth.ts` - JWT authentication utilities
- `lib/project-config.ts` - Project configuration management
- `lib/schema.sql` - Complete database schema
- `scripts/test-db.js` - Database connection test script

## 📞 Support

If you encounter issues:

1. Check the error logs for specific error messages
2. Verify your environment configuration
3. Test with the provided test script
4. Review MySQL server logs for additional details

---

**Happy coding! 🎉**
