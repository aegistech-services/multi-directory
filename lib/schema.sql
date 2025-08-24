-- Langkawi Directory Database Schema
-- This file contains the initial database structure for the project

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS admin_listing;
USE admin_listing;

-- Users table (core authentication)
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'businessOwner', 'freelancer', 'advertiser', 'publicUser') NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    is_active BOOLEAN DEFAULT TRUE,
    email_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_role (role),
    INDEX idx_active (is_active)
);

-- User profiles (extended user information)
CREATE TABLE IF NOT EXISTS user_profiles (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL,
    avatar_url VARCHAR(500),
    bio TEXT,
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(100) DEFAULT 'Malaysia',
    website VARCHAR(255),
    social_media JSON,
    preferences JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id)
);

-- Business listings
CREATE TABLE IF NOT EXISTS business_listings (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    owner_id VARCHAR(36) NOT NULL,
    business_name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    subcategory VARCHAR(100),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(100) DEFAULT 'Malaysia',
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    phone VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    business_hours JSON,
    services JSON,
    is_featured BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_owner_id (owner_id),
    INDEX idx_category (category),
    INDEX idx_city (city),
    INDEX idx_featured (is_featured),
    INDEX idx_verified (is_verified),
    INDEX idx_active (is_active),
    INDEX idx_location (latitude, longitude)
);

-- Business gallery (images and documents)
CREATE TABLE IF NOT EXISTS business_gallery (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    business_id VARCHAR(36) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_url VARCHAR(500) NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    file_size INT NOT NULL,
    caption VARCHAR(255),
    sort_order INT DEFAULT 0,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (business_id) REFERENCES business_listings(id) ON DELETE CASCADE,
    INDEX idx_business_id (business_id),
    INDEX idx_file_type (file_type),
    INDEX idx_sort_order (sort_order)
);

-- Job postings
CREATE TABLE IF NOT EXISTS job_postings (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    business_id VARCHAR(36) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT,
    salary_min DECIMAL(10, 2),
    salary_max DECIMAL(10, 2),
    salary_type ENUM('hourly', 'daily', 'weekly', 'monthly', 'yearly'),
    job_type ENUM('full-time', 'part-time', 'contract', 'freelance', 'internship'),
    location VARCHAR(255),
    is_remote BOOLEAN DEFAULT FALSE,
    application_deadline DATE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (business_id) REFERENCES business_listings(id) ON DELETE CASCADE,
    INDEX idx_business_id (business_id),
    INDEX idx_title (title),
    INDEX idx_job_type (job_type),
    INDEX idx_location (location),
    INDEX idx_active (is_active),
    INDEX idx_deadline (application_deadline)
);

-- Service listings (for freelancers)
CREATE TABLE IF NOT EXISTS service_listings (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    freelancer_id VARCHAR(36) NOT NULL,
    service_name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100),
    subcategory VARCHAR(100),
    price_min DECIMAL(10, 2),
    price_max DECIMAL(10, 2),
    price_type ENUM('hourly', 'daily', 'project', 'consultation'),
    skills JSON,
    experience_years INT,
    portfolio_urls JSON,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (freelancer_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_freelancer_id (freelancer_id),
    INDEX idx_service_name (service_name),
    INDEX idx_category (category),
    INDEX idx_price_range (price_min, price_max),
    INDEX idx_active (is_active)
);

-- Inquiries (contact forms)
CREATE TABLE IF NOT EXISTS inquiries (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    from_user_id VARCHAR(36),
    to_user_id VARCHAR(36) NOT NULL,
    listing_type ENUM('business', 'job', 'service', 'general') NOT NULL,
    listing_id VARCHAR(36),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    contact_email VARCHAR(255),
    contact_phone VARCHAR(20),
    status ENUM('new', 'read', 'replied', 'closed') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (from_user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (to_user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_from_user (from_user_id),
    INDEX idx_to_user (to_user_id),
    INDEX idx_listing (listing_type, listing_id),
    INDEX idx_status (status),
    INDEX idx_created (created_at)
);

-- Promotions (banners and featured content)
CREATE TABLE IF NOT EXISTS promotions (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL,
    promotion_type ENUM('banner', 'featured', 'sponsored') NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    link_url VARCHAR(500),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_type (promotion_type),
    INDEX idx_dates (start_date, end_date),
    INDEX idx_active (is_active),
    INDEX idx_sort (sort_order)
);

-- Subscriptions and plans
CREATE TABLE IF NOT EXISTS subscription_plans (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    billing_cycle ENUM('monthly', 'yearly') DEFAULT 'monthly',
    features JSON,
    max_listings INT,
    max_images INT,
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_name (name),
    INDEX idx_price (price),
    INDEX idx_active (is_active)
);

-- User subscriptions
CREATE TABLE IF NOT EXISTS user_subscriptions (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL,
    plan_id VARCHAR(36) NOT NULL,
    stripe_subscription_id VARCHAR(255),
    status ENUM('active', 'canceled', 'past_due', 'unpaid') DEFAULT 'active',
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (plan_id) REFERENCES subscription_plans(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_plan_id (plan_id),
    INDEX idx_status (status),
    INDEX idx_dates (start_date, end_date)
);

-- Bookmarks (user saved items)
CREATE TABLE IF NOT EXISTS bookmarks (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL,
    item_type ENUM('business', 'job', 'service') NOT NULL,
    item_id VARCHAR(36) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_bookmark (user_id, item_type, item_id),
    INDEX idx_user_id (user_id),
    INDEX idx_item (item_type, item_id)
);

-- Admin audit logs
CREATE TABLE IF NOT EXISTS admin_logs (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    admin_id VARCHAR(36) NOT NULL,
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50),
    entity_id VARCHAR(36),
    details JSON,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_admin_id (admin_id),
    INDEX idx_action (action),
    INDEX idx_entity (entity_type, entity_id),
    INDEX idx_created (created_at)
);

-- Insert default subscription plans
INSERT IGNORE INTO subscription_plans (id, name, description, price, billing_cycle, features, max_listings, max_images, is_featured) VALUES
('basic-plan', 'Basic Plan', 'Essential features for small businesses', 29.99, 'monthly', '["Basic listing", "Contact form", "Business hours"]', 1, 5, FALSE),
('premium-plan', 'Premium Plan', 'Advanced features with priority support', 59.99, 'monthly', '["Premium listing", "Contact form", "Business hours", "Gallery", "Featured placement"]', 3, 15, TRUE),
('enterprise-plan', 'Enterprise Plan', 'Full features for large businesses', 99.99, 'monthly', '["Enterprise listing", "Contact form", "Business hours", "Gallery", "Featured placement", "Priority support", "Analytics"]', 10, 50, TRUE);

-- Insert default admin user (password: admin123)
INSERT IGNORE INTO users (id, email, password_hash, role, first_name, last_name, is_active, email_verified) VALUES
('admin-user', 'admin@langkawi-directory.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5uOeG', 'admin', 'Admin', 'User', TRUE, TRUE);

-- Insert admin profile
INSERT IGNORE INTO user_profiles (id, user_id, bio, city, state, country) VALUES
('admin-profile', 'admin-user', 'System Administrator for Langkawi Directory', 'Langkawi', 'Kedah', 'Malaysia');
