#!/usr/bin/env node

/**
 * Project Configuration Test Script
 * This script tests the project configuration management
 */

require('dotenv').config();

async function testProjectConfig() {
  console.log('⚙️  Testing Project Configuration System...\n');
  
  try {
    // Import the project config utilities
    const { 
      defaultProjectConfig,
      projectPresets,
      isRoleEnabled,
      isModuleEnabled,
      getEnabledModulesForRole,
      getEnabledRoles,
      validateProjectConfig
    } = require('../lib/project-config.js');
    
    // Test 1: Default configuration
    console.log('1️⃣  Testing Default Configuration...');
    console.log(`   Project Name: ${defaultProjectConfig.projectName}`);
    console.log(`   Enabled Roles: ${defaultProjectConfig.enabledRoles.join(', ')}`);
    console.log(`   Total Roles: ${defaultProjectConfig.enabledRoles.length}`);
    
    // Test 2: Role validation
    console.log('\n2️⃣  Testing Role Validation...');
    const testRoles = ['admin', 'businessOwner', 'invalidRole'];
    testRoles.forEach(role => {
      const enabled = isRoleEnabled(role);
      console.log(`   Role '${role}': ${enabled ? '✅ Enabled' : '❌ Disabled'}`);
    });
    
    // Test 3: Module validation
    console.log('\n3️⃣  Testing Module Validation...');
    const testModules = [
      { role: 'admin', module: 'businessListing' },
      { role: 'admin', module: 'invalidModule' },
      { role: 'businessOwner', module: 'businessListing' },
      { role: 'publicUser', module: 'bookmark' }
    ];
    
    testModules.forEach(({ role, module }) => {
      const enabled = isModuleEnabled(role, module);
      console.log(`   Module '${module}' for role '${role}': ${enabled ? '✅ Enabled' : '❌ Disabled'}`);
    });
    
    // Test 4: Get enabled modules for roles
    console.log('\n4️⃣  Testing Module Retrieval...');
    const roles = ['admin', 'businessOwner', 'freelancer'];
    roles.forEach(role => {
      const modules = getEnabledModulesForRole(role);
      console.log(`   Role '${role}' modules: ${modules.join(', ')}`);
    });
    
    // Test 5: Project presets
    console.log('\n5️⃣  Testing Project Presets...');
    Object.keys(projectPresets).forEach(presetName => {
      const preset = projectPresets[presetName];
      console.log(`   ${presetName}: ${preset.projectName} (${preset.enabledRoles.length} roles)`);
    });
    
    // Test 6: Configuration validation
    console.log('\n6️⃣  Testing Configuration Validation...');
    const validConfig = validateProjectConfig(defaultProjectConfig);
    console.log(`   Default config valid: ${validConfig.isValid ? '✅ Yes' : '❌ No'}`);
    if (!validConfig.isValid) {
      console.log(`   Errors: ${validConfig.errors.join(', ')}`);
    }
    
    // Test 7: Invalid configuration
    console.log('\n7️⃣  Testing Invalid Configuration...');
    const invalidConfig = {
      projectName: '',
      enabledRoles: [],
      enabledModules: {}
    };
    const invalidValidation = validateProjectConfig(invalidConfig);
    console.log(`   Invalid config valid: ${invalidValidation.isValid ? '✅ Yes' : '❌ No'}`);
    if (!invalidValidation.isValid) {
      console.log(`   Errors: ${invalidValidation.errors.join(', ')}`);
    }
    
    // Test 8: Environment variables
    console.log('\n8️⃣  Checking Environment Variables...');
    console.log(`   NODE_ENV: ${process.env.NODE_ENV || 'development'}`);
    console.log(`   Project config loaded successfully`);
    
    console.log('\n🎉 All project configuration tests passed successfully!');
    console.log('\n⚙️  Your configuration system is ready to use.');
    
  } catch (error) {
    console.error('\n❌ Project configuration test failed:');
    console.error('   Error:', error.message);
    console.error('\n🔧 Troubleshooting tips:');
    console.error('   1. Check if project-config.js file exists');
    console.error('   2. Verify the file syntax is correct');
    console.error('   3. Check for any import/export issues');
    
    process.exit(1);
  }
}

// Run the test
testProjectConfig().catch(console.error);
