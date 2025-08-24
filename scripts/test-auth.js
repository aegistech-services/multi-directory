#!/usr/bin/env node

/**
 * JWT Authentication Test Script
 * This script tests the JWT authentication utilities
 */

require('dotenv').config();

async function testJWT() {
  console.log('🔐 Testing JWT Authentication System...\n');
  
  try {
    // Import the auth utilities
    const { 
      generateToken, 
      verifyToken, 
      hashPassword, 
      comparePassword,
      generateRandomPassword,
      validatePasswordStrength,
      UserRole
    } = require('../lib/auth');
    
    // Test 1: Generate JWT token
    console.log('1️⃣  Testing JWT Token Generation...');
    const payload = {
      userId: 'test-user-123',
      email: 'test@example.com',
      role: UserRole.ADMIN
    };
    
    const token = generateToken(payload);
    console.log('✅ Token generated successfully');
    console.log(`   Token length: ${token.length} characters`);
    console.log(`   Token preview: ${token.substring(0, 50)}...`);
    
    // Test 2: Verify JWT token
    console.log('\n2️⃣  Testing JWT Token Verification...');
    const decoded = verifyToken(token);
    console.log('✅ Token verified successfully');
    console.log(`   User ID: ${decoded.userId}`);
    console.log(`   Email: ${decoded.email}`);
    console.log(`   Role: ${decoded.role}`);
    console.log(`   Issued at: ${new Date(decoded.iat * 1000).toISOString()}`);
    console.log(`   Expires at: ${new Date(decoded.exp * 1000).toISOString()}`);
    
    // Test 3: Password hashing
    console.log('\n3️⃣  Testing Password Hashing...');
    const testPassword = 'MySecurePassword123!';
    const hashedPassword = await hashPassword(testPassword);
    console.log('✅ Password hashed successfully');
    console.log(`   Original password: ${testPassword}`);
    console.log(`   Hashed password: ${hashedPassword}`);
    console.log(`   Hash length: ${hashedPassword.length} characters`);
    
    // Test 4: Password comparison
    console.log('\n4️⃣  Testing Password Comparison...');
    const isMatch = await comparePassword(testPassword, hashedPassword);
    const isWrongMatch = await comparePassword('WrongPassword', hashedPassword);
    console.log('✅ Password comparison successful');
    console.log(`   Correct password match: ${isMatch}`);
    console.log(`   Wrong password match: ${isWrongMatch}`);
    
    // Test 5: Random password generation
    console.log('\n5️⃣  Testing Random Password Generation...');
    const randomPassword = generateRandomPassword(16);
    console.log('✅ Random password generated');
    console.log(`   Generated password: ${randomPassword}`);
    console.log(`   Password length: ${randomPassword.length}`);
    
    // Test 6: Password strength validation
    console.log('\n6️⃣  Testing Password Strength Validation...');
    const strongPassword = 'MySecurePassword123!';
    const weakPassword = 'weak';
    
    const strongValidation = validatePasswordStrength(strongPassword);
    const weakValidation = validatePasswordStrength(weakPassword);
    
    console.log('✅ Password validation successful');
    console.log(`   Strong password valid: ${strongValidation.isValid}`);
    if (!strongValidation.isValid) {
      console.log(`   Errors: ${strongValidation.errors.join(', ')}`);
    }
    
    console.log(`   Weak password valid: ${weakValidation.isValid}`);
    if (!weakValidation.isValid) {
      console.log(`   Errors: ${weakValidation.errors.join(', ')}`);
    }
    
    // Test 7: Environment variables
    console.log('\n7️⃣  Checking Environment Variables...');
    console.log(`   JWT_SECRET: ${process.env.JWT_SECRET ? '✅ Set' : '❌ Not set'}`);
    console.log(`   JWT_EXPIRES_IN: ${process.env.JWT_EXPIRES_IN || '7d (default)'}`);
    console.log(`   BCRYPT_SALT_ROUNDS: ${process.env.BCRYPT_SALT_ROUNDS || '12 (default)'}`);
    
    console.log('\n🎉 All JWT authentication tests passed successfully!');
    console.log('\n🔐 Your authentication system is ready to use.');
    
  } catch (error) {
    console.error('\n❌ JWT authentication test failed:');
    console.error('   Error:', error.message);
    console.error('\n🔧 Troubleshooting tips:');
    console.error('   1. Check if JWT_SECRET is set in .env file');
    console.error('   2. Verify all dependencies are installed');
    console.error('   3. Check the auth.ts file for syntax errors');
    
    process.exit(1);
  }
}

// Run the test
testJWT().catch(console.error);
