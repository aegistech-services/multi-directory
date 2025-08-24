// Project configuration interface
export interface ProjectConfig {
  projectName: string;
  enabledRoles: string[];
  enabledModules: {
    [role: string]: string[];
  };
}

// Default project configuration for Langkawi Directory
export const defaultProjectConfig: ProjectConfig = {
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
export const projectPresets = {
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
export const loadProjectConfig = (): ProjectConfig => {
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
export const isRoleEnabled = (role: string, config: ProjectConfig = defaultProjectConfig): boolean => {
  return config.enabledRoles.includes(role);
};

// Check if a module is enabled for a role
export const isModuleEnabled = (
  role: string, 
  module: string, 
  config: ProjectConfig = defaultProjectConfig
): boolean => {
  const enabledModules = config.enabledModules[role] || [];
  return enabledModules.includes(module);
};

// Get enabled modules for a role
export const getEnabledModulesForRole = (
  role: string, 
  config: ProjectConfig = defaultProjectConfig
): string[] => {
  return config.enabledModules[role] || [];
};

// Get all enabled roles
export const getEnabledRoles = (config: ProjectConfig = defaultProjectConfig): string[] => {
  return [...config.enabledRoles];
};

// Validate project configuration
export const validateProjectConfig = (config: ProjectConfig): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];
  
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
export const currentConfig = loadProjectConfig();
