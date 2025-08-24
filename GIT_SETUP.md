# Git Configuration Guide - Langkawi Directory

This guide covers the Git configuration and best practices for the project.

## 🔧 Current Git Configuration

### **Repository Information**
- **Remote Origin:** https://github.com/aegistech-services/multi-directory.git
- **Default Branch:** main
- **Project Name:** Langkawi Directory

### **Local Git Configuration**
```bash
# User Configuration
git config user.name "Aegis Tech Services"
git config user.email "admin@aegisnode.ddns.net"

# Core Configuration
git config core.autocrlf input          # Handle line endings for cross-platform
git config core.safecrlf true          # Prevent line ending issues
git config pull.rebase false           # Use merge strategy for pulls
```

## 📋 Git Workflow Best Practices

### **Branch Strategy**
- **main:** Production-ready code
- **develop:** Development integration branch
- **feature/***: Feature development branches
- **hotfix/***: Critical bug fixes
- **release/***: Release preparation branches

### **Commit Message Convention**
```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
git commit -m "feat(auth): implement JWT authentication system"
git commit -m "fix(db): resolve MySQL connection timeout issue"
git commit -m "docs(setup): add comprehensive database setup guide"
```

## 🚀 Useful Git Commands

### **Daily Workflow**
```bash
# Check status
git status

# Add files
git add .                    # Add all changes
git add <filename>           # Add specific file
git add -p <filename>        # Interactive add

# Commit changes
git commit -m "message"
git commit -am "message"     # Add and commit tracked files

# Push changes
git push origin main
git push origin <branch>

# Pull latest changes
git pull origin main
```

### **Branch Management**
```bash
# Create and switch to new branch
git checkout -b feature/new-feature

# Switch between branches
git checkout main
git checkout develop

# List all branches
git branch -a

# Delete local branch
git branch -d <branch-name>

# Delete remote branch
git push origin --delete <branch-name>
```

### **History and Logs**
```bash
# View commit history
git log --oneline
git log --graph --oneline --all
git log --author="username"

# View file history
git log --follow <filename>

# View changes in commit
git show <commit-hash>
```

## 🔒 Security and Privacy

### **Environment Files**
- **NEVER commit .env files** - They contain sensitive information
- **Use .env.example** for documentation
- **Environment variables** are in .gitignore

### **Sensitive Data**
- **Database credentials** should never be in Git
- **API keys** and secrets are excluded
- **User data** should not be committed

## 📁 Project Structure in Git

### **Tracked Files**
```
multi-directory/
├── app/                    # Next.js application
├── components/             # React components
├── lib/                    # Utility libraries
│   ├── auth.ts            # Authentication utilities
│   ├── db.ts              # Database connection
│   ├── project-config.ts  # Project configuration
│   └── schema.sql         # Database schema
├── scripts/                # Utility scripts
├── docs/                   # Documentation
├── package.json            # Dependencies
└── README.md               # Project overview
```

### **Ignored Files**
- `.env*` - Environment files
- `node_modules/` - Dependencies
- `.next/` - Build output
- `logs/` - Log files
- `uploads/` - User uploads
- `*.sqlite` - Local databases

## 🧪 Testing and Quality Assurance

### **Pre-commit Checks**
```bash
# Run tests before committing
npm test

# Check code quality
npm run lint

# Type checking (TypeScript)
npm run type-check
```

### **Code Review Process**
1. **Create feature branch** from develop
2. **Implement changes** with proper commits
3. **Run tests** locally
4. **Push branch** and create pull request
5. **Code review** by team members
6. **Merge** after approval

## 🔄 Collaboration Workflow

### **Team Development**
```bash
# 1. Get latest changes
git pull origin develop

# 2. Create feature branch
git checkout -b feature/your-feature

# 3. Make changes and commit
git add .
git commit -m "feat: your feature description"

# 4. Push branch
git push origin feature/your-feature

# 5. Create pull request on GitHub
# 6. After review, merge to develop
```

### **Conflict Resolution**
```bash
# When conflicts occur during merge/pull
git status                    # Check conflicted files
# Edit files to resolve conflicts
git add <resolved-files>      # Mark as resolved
git commit                    # Complete merge
```

## 📊 Git Statistics and Monitoring

### **Repository Insights**
```bash
# View repository size
git count-objects -vH

# View commit statistics
git shortlog -sn

# View file changes
git diff --stat HEAD~1
```

### **Performance Optimization**
```bash
# Clean up repository
git gc
git prune

# Optimize repository
git repack -a -d
```

## 🚨 Troubleshooting

### **Common Issues**

#### **Permission Denied**
```bash
# Check file permissions
ls -la .git/

# Fix ownership
sudo chown -R $USER:$USER .git/
```

#### **Large File Issues**
```bash
# Remove large files from history
git filter-branch --tree-filter 'rm -f large-file.zip' HEAD

# Clean up
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

#### **Reset to Previous State**
```bash
# Soft reset (keep changes staged)
git reset --soft HEAD~1

# Hard reset (discard all changes)
git reset --hard HEAD~1

# Reset to specific commit
git reset --hard <commit-hash>
```

## 📚 Additional Resources

- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

## 🎯 Next Steps

1. **Review current staged files** and commit them
2. **Set up branch protection** on GitHub (if admin)
3. **Configure CI/CD** for automated testing
4. **Set up code review** process with team

---

**Happy coding and collaborating! 🚀**
