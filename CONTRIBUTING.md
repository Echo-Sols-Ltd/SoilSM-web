# Contributing to SoilSmart

Thank you for your interest in contributing to SoilSmart! This document provides guidelines for contributing to the project.

## Development Workflow

### Branching Strategy

We follow a structured branching strategy:

- `main` - Production-ready code (protected)
- `develop` - Development branch for integration
- `feature/*` - New features (e.g., `feature/user-authentication`)
- `bugfix/*` - Bug fixes (e.g., `bugfix/login-error`)
- `hotfix/*` - Critical production fixes
- `release/*` - Release preparation

### Getting Started

1. **Fork and Clone**
   ```bash
   git clone https://github.com/Echo-Sols-Ltd/SoilSM-web.git
   cd SoilSM-web
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation as needed

5. **Test Your Changes**
   ```bash
   npm run dev
   npm run lint
   ```

6. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add descriptive commit message"
   ```

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**
```
feat: add soil moisture monitoring dashboard
fix: resolve navigation menu mobile responsiveness
docs: update installation instructions
style: format code with prettier
refactor: optimize sensor data processing
test: add unit tests for API endpoints
chore: update dependencies
```

### Pull Request Process

1. Update your branch with the latest changes from `develop`
   ```bash
   git checkout develop
   git pull origin develop
   git checkout feature/your-feature-name
   git rebase develop
   ```

2. Push your changes
   ```bash
   git push origin feature/your-feature-name
   ```

3. Create a Pull Request
   - Use a descriptive title
   - Provide a detailed description of changes
   - Reference any related issues
   - Request review from maintainers

4. Address Review Comments
   - Make requested changes
   - Push updates to the same branch

5. Merge
   - Once approved, your PR will be merged into `develop`
   - Delete your feature branch after merge

## Code Style Guidelines

### TypeScript/React

- Use functional components with hooks
- Use TypeScript for type safety
- Follow React best practices
- Use meaningful variable and function names
- Keep components small and focused

### CSS/Tailwind

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and sizing
- Use custom classes for reusable styles

### File Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── lib/             # Utility functions and constants
└── styles/          # Global styles
```

## Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Maintain or improve code coverage

## Documentation

- Update README.md for significant changes
- Add JSDoc comments for complex functions
- Update API documentation as needed

## Questions?

Feel free to open an issue for any questions or concerns.

Thank you for contributing to SoilSmart! 🌱

