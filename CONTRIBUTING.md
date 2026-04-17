# Contributing to KeenKeeper

Thank you for your interest in contributing to KeenKeeper! This document provides guidelines and instructions for contributing.

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/keenkeeper.git
   cd keenkeeper
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## Code Style

- Use ESLint for code linting
- Follow the Prettier formatting configuration in `.prettierrc`
- Use meaningful variable and function names
- Add comments for complex logic

## Commit Message Guidelines

- Use clear, descriptive commit messages
- Format: `type: short description`
- Examples:
  - `feat: add friend filtering feature`
  - `fix: resolve timeline date sorting issue`
  - `docs: update README with setup instructions`
  - `style: improve button styling on mobile`

## Pull Request Process

1. Create a new branch from `main`
2. Make your changes
3. Test thoroughly on mobile, tablet, and desktop
4. Submit a pull request with a clear description

## Testing

- Test all features on different screen sizes
- Verify responsive design on mobile (375px), tablet (768px), and desktop (1280px)
- Test interaction features (Call, Text, Video buttons)
- Check console for any errors

## Reporting Issues

If you find a bug or have a feature request, please open an issue with:
- Clear description
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable

## Questions?

Feel free to open an issue for questions or clarifications!

---

Thank you for helping make KeenKeeper better! 🤝
