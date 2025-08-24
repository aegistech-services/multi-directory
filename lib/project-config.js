/**
 * Project Configuration Management (JavaScript version for testing)
 */

// Project configuration interface
const defaultProjectConfig = {
  projectName: "Langkawi Directory",
  enabledRoles: ["admin", "businessOwner", "freelancer", "advertiser", "publicUser"],
  enabledModules: {
    admin: [
      "businessListing", 
      "jobPosting", 
      "servicePosting", 
      "inquiry", 
      "promotion", 
      "subscription", 
      "ads", 
      "analytics", 
      "seo", 
      "stripePayment", 
      "disclaimer", 
      "logs"
    ],
    businessOwner: [
      "businessListing", 
      "jobPosting", 
      "inquiry", 
      "promotion", 
      "subscription"
    ],
    freelancer: [
      "serviceListing", 
      "inquiry", 
      "promotion", 
      "subscription"
    ],
    advertiser: [
      "ads", 
      "inquiry", 
      "promotion", 
      "subscription"
    ],
    publicUser: [
      "bookmark", 
      "inquiry", 
      "profile", 
      "sitePromotion"
    ]
  }
};

// Preset configurations for different project types
const projectPresets = {
  businessDirectory: {
    projectName: "Business Directory",
    enabledRoles: ["admin", "businessOwner", "publicUser"],
    enabledModules: {
      admin: ["businessListing", "inquiry", "promotion", "subscription", "analytics", "seo"],
      businessOwner: ["businessListing", "inquiry", "promotion", "subscription"],
      publicUser: ["bookmark", "inquiry", "profile", "sitePromotion"]
    }
  },
  eventDirectory: {
    projectName: "Event Directory",
    enabledRoles: ["admin", "publicUser"],
    enabledModules: {
      admin: ["eventListing", "inquiry", "promotion", "subscription", "analytics", "seo"],
      publicUser: ["bookmark", "inquiry", "profile", "sitePromotion"]
    }
  },
  freelancerMarketplace: {
    projectName: "Freelancer Marketplace",
    enabledRoles: ["admin", "freelancer", "publicUser"],
    enabledModules: {
      admin: ["serviceListing", "inquiry", "promotion", "subscription", "analytics", "seo"],
      freelancer: ["serviceListing", "inquiry", "promotion", "subscription"],
      publicUser: ["bookmark", "inquiry", "profile", "sitePromotion"]
    }
  },
  adsBoard: {
    projectName: "Ads Board",
    enabledRoles: ["admin", "advertiser", "publicUser"],
    enabledModules: {
      admin: ["ads", "inquiry", "promotion", "subscription", "analytics", "seo"],
      advertiser: ["ads", "inquiry", "promotion", "subscription"],
      publicUser: ["bookmark", "inquiry", "profile", "sitePromotion"]
    }
  }
};

// Load project configuration
const loadProjectConfig = () => {
  try {
    // In a real application, this could load from a database or file
    // For now, we'll use the default configuration
    return defaultProjectConfig;
  } catch (error) {
    console.error('Failed to load project configuration, using default:', error);
    return defaultProjectConfig;
  }
};

// Check if a role is enabled
const isRoleEnabled = (role, config = defaultProjectConfig) => {
  return config.enabledRoles.includes(role);
};

// Check if a module is enabled for a role
const isModuleEnabled = (role, module, config = defaultProjectConfig) => {
  const enabledModules = config.enabledModules[role] || [];
  return enabledModules.includes(module);
};

// Get enabled modules for a role
const getEnabledModulesForRole = (role, config = defaultProjectConfig) => {
  return config.enabledModules[role] || [];
};

// Get all enabled roles
const getEnabledRoles = (config = defaultProjectConfig) => {
  return [...config.enabledRoles];
};

// Validate project configuration
const validateProjectConfig = (config) => {
  const errors = [];
  
  if (!config.projectName) {
    errors.push('Project name is required');
  }
  
  if (!Array.isArray(config.enabledRoles) || config.enabledRoles.length === 0) {
    errors.push('At least one role must be enabled');
  }
  
  if (!config.enabledModules || typeof config.enabledModules !== 'object') {
    errors.push('Enabled modules configuration is required');
  }
  
  // Check if all enabled roles have module configurations
  for (const role of config.enabledRoles) {
    if (!config.enabledModules[role] || !Array.isArray(config.enabledModules[role])) {
      errors.push(`Role '${role}' is missing module configuration`);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Export the current configuration
const currentConfig = loadProjectConfig();

module.exports = {
  defaultProjectConfig,
  projectPresets,
  loadProjectConfig,
  isRoleEnabled,
  isModuleEnabled,
  getEnabledModulesForRole,
  getEnabledRoles,
  validateProjectConfig,
  currentConfig,
};
